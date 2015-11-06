# Authentication and Mailers

## Introduction
- Authentication is the process of making sure a user is who they say they are.
- This is often done by having them sign up with a username/email and password, and then checking the values they entered upon login.

## has_secure_password
- Rails has an inbuilt way to handle username - password authentication called has_secure_password.
- When this line is added to the appropriate model, a password hash is generated based on a plain text password.
- We then write our own login to authenticate the password in our controllers.
- has_secure_password uses the bcrypt gem, which hashes passwords based on the popular [Blowfish encryption algorithm](https://en.wikipedia.org/wiki/Blowfish_(cipher)).

##### user.rb

```ruby
class User < ActiveRecord::Base
	has_secure_password
end
```

- We can now use this helper:

```ruby
user = User.where(email_address: "arun.instructor@gmail.com").first

user.authenticate("my password")
```

## Simple Authentication Lab
- Given what we discussed, how can we build logic to handle user login?
- Think of how we can implement this with a nice user experience.
- Try out a simple example as a team.

## Devise
- Authentication these days has become complex. It's not just about authenticating users based on their username/email and password.
- We need to consider things like the "remember me" feature, and the "reset my password" feature.
- With each of these pieces there is a lot going on.
- Devise is a gem that handles most of this logic for us and performs the operations in a best-practice way.
- The gem definitely takes over your project, so it's a good place to start if you're starting a new project that needs authentication.
- Let's check out their documentation [here](https://github.com/plataformatec/devise).

## Devise Installation
- In order to install Devise, we will use the steps from their documentation:

##### Install gem

```
gem "devise"
```

##### Install initializer

```
rails generate devise:install
```

##### Add Devise to user model

```
rails generate devise User
```

##### Change mailer sender in Devise configuration

config/initializers/devise.rb

```
config.mailer_sender = 'email address here'
```

##### Generate Devise views

```
rails generate devise:views
```

##### Add default host URL to application

config/environments/development.rb

```
Rails.application.routes.default_url_options[:host] = 'http://localhost:3000'
```

## What Devise Does
- Devise generates all views and functionality for us surrounding sign up and login of users.
- The gem also gives us access to a few helpers to use throughout our app:

##### Check if user is logged in

```
user_signed_in?
```

##### Entire user object

```
current_user
```

##### Authenticate a user before doing any controller actions that follow

```
before_action :authenticate_user!
```

## Configure ActionMailer to Use Mandrill
- Mandrill is a mail as a service provider that allows you to send email much easier and better through a simple API.
- We will sign up for a free account [here](https://mandrillapp.com).
- We will add an initializer to configure our mail settings:

##### config/initializers/mailer_settings.rb

```ruby
ActionMailer::Base.delivery_method = :smtp
ActionMailer::Base.smtp_settings = {
	:port =>           '587',
    :address =>        'smtp.mandrillapp.com',
    :user_name =>      "username here",
    :password =>       "password here",
    :domain =>         'domain here',
    :authentication => :plain
}
```

## Using ActionMailer
- ActionMailer is a piece of software built into Rails that helps you send emails using the standard ERB template format we are used to.
- You can generate different mailers using the command line interface:

```
rails g mailer UserMailer
```

- You will now get a file that looks like a controller in your "mailers" folder. Each method you define here is a class method by default:

```ruby
class UserMailer < ApplicationMailer
	default from: "Arun Sood <arun.instructor@gmail.com>"

	def say_hello(name)
		@name = name
		mail(to: "test@test.com", subject: "Hello there!")
	end
end
```

- The way it works is that you will have views inside of views/user_mailer that have the same names as the method names in the mailer file. Here we have a file called say_hello.html.erb:

```ruby
<h1>Hello <%= @name %>!</h1>
```

- We can use this mailer in our controller whenever we need to send mail using this template:

```ruby
UserMailer.say_hello("Arun Sood").deliver_now
```

## Homework
- For homework you will add an authentication component to your book manager application.
- Your application should require sign up and login before allowing the users to see and use the book app.
- **Bonus:** Have your application send an email to the authenticated user when a new book is added.