# Rails Models

## Rails Recap
- We will recap Rails by diving back into the HelloWorld application.

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

## User Manager Code-Along
- Now that we have all of the basics, we will be practicing Rails by creating a user-manager system.
- We will be using the template located [here](user_database/).
- Here are the steps we will follow:
	- Step 1: Set the views up as part of a Rails application.
	- Step 2: Make sure all assets load and put vendor assets in the correct place.
	- Step 3: Set up two routes - one for displaying all users and one for editing a user.
	- Step 4: Create our model to interact with the database.
	- Step 5: Add controller methods to process the data.