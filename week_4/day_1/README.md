# Rails Forms and Application CRUD

## Homework Review
- We will be reviewing the homework from last time together in class.

## `form_tag`
- In order to use forms in a Rails application, it is a requirement to use one of the available helpers.
- The Rails helpers ensure that a CSRF token is associated with every form, thus reducing the risk of spoofing attacks.
- `form_tag` is the easiest helper because it just produces a simple form tag with the authenticity_token.

```ruby
<%= form_tag do %>
	<input type="text" name="username" />
	<input type="password" name="password" />
	<button type="submit">Submit Form</button>
<% end %>
```

## `form_for`
- Another helper that will come in handy is the `form_for` helper.
- This one will not only provide the form tag with the authenticity_token, but will also help format the various fields as per your data model.
- This is a nice tool to use when your form applies data from a specific model.

Controller:

```ruby
@user = User.new
```

View:

```ruby
<%= form_for @user do |f| %>
	<%= f.text_field :username %>
	<%= f.password_field :password %>
	<%= f.text_field :name %>
	<%= f.email_field :email %>
<% end %>
```

## User Manager Code-Along
- We will be continuing our user manager system from last week.
- We will add the functionality to add a user, edit a user, and delete a user.

## In-Class Lab / Homework
- In this lab we will be implementing what we learned with forms to our book manager application.
- Your task is to set up your book application to create, edit, and delete books via forms.