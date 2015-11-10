# Assessment

Today we will be assessing your knowledge thus far in the course with an activity that combines many of the skills we learned. We will be creating a blogging platform with Rails that allows users to create an account, login, and post blog posts.

## Directions
1. All of the front end has been done for you and is located in the [blog_template](blog_template/) folder. You will need to move this into the appropriate folders to use with Rails.

2. Create the user model and install Devise. There are a few more fields than the ones Devise provides you (first name, last name, username, about me). Use the code below to make sure Devise uses all attributes while saving users to the DB.

##### Create a "Registrations" controller and replace all code with this:

```ruby
class RegistrationsController < Devise::RegistrationsController

private

	def sign_up_params
		params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation, :username, :about_me)
	end

	def account_update_params
		params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation, :current_password, :username, :about_me)
	end

end
```

##### Change your routes.rb file to reflect the following:

```ruby
devise_for :users, :controllers => { registrations: "registrations" }
```

> Note: You can then add your fields using the same form helpers we have used in class to the devise views located in app/views/devise.

3. Activate functionality to create a new post and display all posts.

4. Make sure to use associations in your models.

5. Use the `current_user` helper in Devise to display the logged-in user's information throughout the site (like in the navbar and footer copyright).

6. **Bonus 1:** Add pagination to your post list page. A good gem for this can be found [here](https://github.com/mislav/will_paginate).

7. **Bonus 2:** Activate commenting feature on post display page.

8. **Bonus 3:** Activate "Blog Search" functionality throughout site.