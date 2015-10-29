# Validations and Associations

## Routes as Resources
- If you have a "resource," as defined by the need to perform all (or most) CRUD operations, you can use the `resources` method in your routes:

```ruby
resources :users
```

- This will create routes for each CRUD operation according to the convention.
- You can view your available routes by running `rake routes`.

## Introduction to Data Validation
- Validations allow us to make sure that the data we are trying to save to the database is in a correct format.
- Think of email addresses: you may want to make sure the email is properly formatted and not just a simple piece of text.
- Also, think of passwords: you may want to make sure they are a certain number of characters and contain at least one letter and one uppercase letter.
- There are many validations we can perform. A good list can be found [here](http://guides.rubyonrails.org/active_record_validations.html).
- All validations occur on the model side.

## Using Validations
- Validations are placed in the model in a "shortcut" type format or a more verbose format.
- If any of these validations fail, the "transaction" is rolled back and the data is not saved to the database.

##### Shortcut:

```ruby
validates :COL_NAME, 
    presence: true, 
    length: { :maximum => 50 }, 
    numericality: false, 
    uniqueness: true
```

##### Verbose:

```ruby
validates_presence_of :first_name
validates_presence_of :last_name
```

or

```ruby
validates :first_name, presence: true
validates :last_name, presence: true
```

- Validations can be checked on the controller side via the `.valid?` method.

## Validations Code-Along
- We will be working together to add a few validations to our user manager system.
- We will also be looking at how to handle validation errors to create a nice user experience.

## Validations Lab
- In this lab we will take what we learned about validations and apply it to the book manager application.
- Try out some of the validation methods to make sure the data entered in your book application is in the correct format.

## Introduction to Database Associations
- More often than not, data within your database will be relational.
- What that means is that each piece relates to one another and can be accessed in series.
- For example: Imagine you have two tables - users and blog posts. If your data is relational you should be able to pull all blog posts related to a specific user.
- The most common association is a has many, belongs to relationship.

##### user.rb

```ruby
class User < ActiveRecord::Base
	has_many :pets
end
```

##### pet.rb

```ruby
class Pet < ActiveRecord::Base
	belongs_to :user
end
```

## Associations Code-Along
- In this code-along we will be adding a Pet model to our user manager system.
- We will make it so that users own pets and pets belong to a specific user.
- We will also be creating views to see pets related to users.
- We will also see how we can represent this association in our routes with nested resources:

```ruby
resources :users do
	resources :pets
end
```

## Homework
- For homework you will be adding associations to your book manager application.
- Your goal is to link your book list with stores that sell the book.
- You will need to create a `Store` model with the appropriate attributes.
- Your app should have the ability to add stores to a specific book via a form.
- Don't worry about associating multiple stores with multiple books. Just one book to one store. Otherwise, this would be a more complex association called a many-to-many.