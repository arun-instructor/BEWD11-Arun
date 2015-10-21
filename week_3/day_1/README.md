# Introduction to Rails

## Install Software

#### Install RVM

`\curl -sSL https://get.rvm.io | bash -s stable`

#### Install Ruby

`rvm install ruby --disable-binary`

#### Check Installation

`ruby -v`

#### Install Rails

`gem install rails --no-ri --no-rdoc`

## Rails from the Rails People

"Ruby on Rails is an open-source web framework that's optimized for programmer happiness and sustainable productivity.

It lets you write beautiful code by favoring convention over configuration."

## What Rails Includes

Rails wraps in a bunch of functionality right out of the box:
- MVC programming pattern convention
- Templating engine called erb
- ORM called ActiveRecord
- Support for developing APIs with token authentication, namespacing, and multiple response types
- A database already wrapped in called SQLite3
- An asset pipeline for managing static assets like stylesheets, javascript files, and images
- Asset "uglifier" or "minifier"
- SASS support
- CoffeeScript support
- Built-in testing suite called MiniTest
- Authentication flow with Bcrypt and has_secure_password
- Development web server called WEBrick
- Extensible functionality through community-supported gems
- Sessions

## MVC Pattern Coding

##### Models
- Models are where data interactions happen.
- You will often see logic related to pulling and saving to databases here.

##### Views
- Views are what the users will actually see.
- It is the UI made dynamic through the templating engine.
- Views in Rails are served through layouts.

##### Controllers
- Controllers bridge the gap between models and views.
- They take requests and do something with them.
- One controller can have many methods relating to that specific logical concern.

##### Routes
- Like Node, routes take HTTP requests from a specific URL and hand them off to a specific controller and a specific method inside that controller.

## Rails Command Line Interface
- Allows you to create new projects
- You can easily generate new components of your project
- Easily destroy aspects of your application that you no longer need
- Three tools we will see a lot:

Rails New:

```
rails new HelloWorld
```

Rails Generate:

```
rails generate controller Hello
```

Rails Destroy:

```
rails destroy controller Hello
```

Rails Console:

```
rails console
```

Rails Server:

```
rails server -b 0.0.0.0 -p 3000
```

Rails DB:

```
rails db
```

RAKE:

```
rake db:migrate
```

## Hello World in Rails

What it's gonna take:
- A controller with a method
- A route
- A view
- Running server

Let's do it!

## Using the Asset Pipeline
- For the basic implementation, all that is needed is for you to place any stylesheets, javascripts, and images in their appropriate folders under app/assets.
- For stylesheets, you can find the asset require code in app/assets/stylesheets/application.css:

```
*= require_tree .
*= require_self
```

- For javascripts, you can find the asset require code in app/assets/javascripts/application.js:

```
//= require turbolinks
//= require_tree .
```

- You will also find a folder called `vendor` at the root of your application. This folder is where you should keep any code written by third parties such as jQuery or Bootstrap.
- To make this work however you will have to alter your application.css and application.js files a bit:

application.css

```
*= require_tree ../../../vendor/assets/stylesheets/
```

application.js

```
//= require_tree ../../../vendor/assets/javascripts/
```

## Models
- Models contain code that performs data operations.
- Such operations may be retrieving a list of users, adding a new user, updating an existing user, and deleting a user.
- Each model encapsulates data about a specific object. An example may be a user here.
- Model methods are normally invoked on the controller side.
- Let's go over a few common operations in terms of a user:

##### Generate a new user model

```
rails generate model User firstname:string lastname:string email:string
```

##### After a new model is created, the database must be migrated to reflect the new changes

```
rake db:migrate
```

##### Create a new user

```ruby
User.create(firstname: "Arun", lastname: "Sood", email: "arun@email.com")
```

##### List all users in the database

```ruby
User.all
```

##### Get information about a specific user

```ruby
User.find(id of user here)
```

##### Update a user

```ruby
User.find(id of user).update_attributes(firstname: "Arun", lastname: "Sood", email: "arun@email.com")
```

##### Delete a user

```ruby
User.find(id of user).destroy
```

- Let's try this together in the Rails console.

## Week-Long Homework
- In this homework we will be creating a book library management system based off [this template](book_manager_html/).
- Follow these steps to complete the app:
	- Step 1: Set the app up as a Rails app. You will need to move everything into the correct directories and get it working with the asset pipeline.
	- Step 2: Create your Book model with the proper attributes as per the template.
	- Step 3: Integrate the form functionality to save, update, and remove books from the library.

## Week-Long Challenge
- In this challenge we will be working with a real interview problem using some advanced Ruby functionality.
- You can find the problem [here](https://github.com/arun-curriculum/Problem-Solving/tree/master/obscenity_filter).