# Building an API

## Designing an API
- When designing an API, it is important to map out the flow of data and to pay attention to RESTful practices.
- API design usually consists of mapping RESTful routes to specific actions for your users to take.
- A standard pen and paper will usually do, but there are tools out there to help you with this process. A popular one is [Apiary](https://apiary.io/).

## Implementing Functionality as an API
- Instead of the traditional intercept a request, issue a response in HTML, CSS and JS, the flow of API is more basic.
- A request is intercepted, processing happens on the server-side, and nothing but a JSON response comes back to the end user.
- Let's take a simple example of user records that are requested:

##### Request:

```
http://mysite.com/users
```

##### Response:

```javascript
[
	{
		firstname: "Bob",
		lastname: "Jones",
		age: 34,
		username: "bjones"
	},
	{
		firstname: "Katie",
		lastname: "Blount",
		age: 21,
		username: "kblount"
	}
]
```

##### Request:

```
http://mysite.com/users/1
```

##### Response:

```javascript
{
	firstname: "Bob",
	lastname: "Jones",
	age: 34,
	username: "bjones"
}
```

##### users_controller.rb

```ruby
def index
	render :json => User.all, status: 200
end

def show
	render :json => User.find(params[:id]), status: 200
end

def create
	user = User.create(user_params)
	
	if user.valid?
		render :nothing => true, :status => 201
	else
		render :nothing => true, :status => 400
	end
end
```

> Notice that each response (render) has a status code attached with it. This is very crucial to API design. A list of applicable status codes can be found [here](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html).

## Rails as an API
- Rails does great as an API, but as you already know, wraps in a lot in the way of additional components meant for the browser.
- That includes functionality like views, assets, etc.
- There is a gem called [rails-api](https://github.com/rails-api/rails-api) that allows you to create a stripped-down project to be used as an api only.
- This gem will be merged into core Rails in the 5th version.

## CSRF with APIs
- As you remember, CSRF tokens help us to prevent forgery when dealing with forms.
- The problem though is that with an API there is no CSRF token. We can easily fix this in application_controller.rb:

```ruby
protect_from_forgery with: :null_session
```

## API Security
- There are times when you want a completely open API for the world to use, and there are times that you want to lock an API down to specific users.
- When you need security you have a few options. If you need to provide third-party access to user content (like we did with Spotify), you can [implement your own OAuth strategy](https://github.com/doorkeeper-gem/doorkeeper).
- If you need to restrict access to users who are registered with an account for example you can use token-based authentication.
- We will be implementing token authentication for our user manager application using the built-in `authenticate_or_request_with_http_token` method.

##### application_controller.rb

```ruby
class ApplicationController < ActionController::Base
	protect_from_forgery with: :null_session

private

	def authenticate
		authenticate_or_request_with_http_token do |token, options|
			@auth_user = User.find_by(auth_token: token)
		end
	end
end
```

##### models/user.rb

```ruby
class User < ActiveRecord::Base
	before_create :set_auth_token

private

	def set_auth_token
		if auth_token.present?
			return
		else
			self.auth_token = generate_auth_token
		end
	end

	def generate_auth_token
		return SecureRandom.uuid.gsub(/\-/, '')
	end

end
```

##### users_controller.rb

```ruby
class UsersController < ApplicationController
	before_action :authenticate
	
	def index
		render :json => User.all, status: 200
	end
	
	def show
		render :json => User.find(params[:id]), status: 200
	end
	
	def create
		user = User.create(user_params)
		
		if user.valid?
			render :nothing => true, :status => 201
		else
			render :nothing => true, :status => 400
		end
	end
end
```

## Build an API Lab
- In this lab we will be taking a pre-built Angular app and adding the backend to power it.
- The front end has been created for you [here](angular_email/).
- The API design documentation can be found [here](angular_email/api_specs.md).
- Your job is to create an API with all of the endpoints listed in the documentation.
- You will also need to implement token-based authentication on all of the functionality except signup and login.
- Since you will be implementing login and signup with Devise through AJAX, a small tweak must be performed to get Devise to work with AJAX requests:

##### controllers/sessions_controller.rb

```ruby
class SessionsController < Devise::SessionsController  
	respond_to :json
end
```

##### controller/registrations_controller.rb

```ruby
class RegistrationsController < Devise::RegistrationsController
	respond_to :json

private

    def sign_up_params
        params.require(:user).permit(:firstname, :lastname, :email, :password, :password_confirmation, :username)
    end

    def account_update_params
        params.require(:user).permit(:firstname, :lastname, :email, :password, :password_confirmation, :current_password, :username)
    end

end
```

##### config/routes.rb

```ruby
devise_for :users, :controllers => { registrations: "registrations", sessions: "sessions" }
```