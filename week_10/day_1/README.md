# Introduction to Testing

## Introduction to RSpec
- RSpec is a BDD testing library that helps you automate tests.
- It uses the "expect" syntax, which allows you to create output expectations and check for them.
- In order to use RSpec you need to install the gem:

```
gem install rspec
```

- Tests are broken down into suites, specs, and assertions.
- Let's have a look at a simple example:

```ruby
describe "A library of functions" do
	it "Should return true" do
		message = true
		
		expect(message).to eq(true)
	end
end
```

- When you're ready to run the test, you will type this command:

```
rspec filename.rb --format documentation
```

- You can also create multiple tests inside of a folder and have RSpec run all of them at the same time. Let's say we have a few tests inside of a "spec" folder:

```
rspec spec --format documentation
```

- There are many "matchers" you can use in your tests. You can see a [list here](https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers).

## Testing Lab
- In this lab we will be writing tests for a simple Ruby script called book.rb.
- The script performs "CRUD" operations on the @library array and we will test to make sure everything is working.
- Your job is to write specs that pass to test the functionality.

## Testing a Rails App
- There are so many moving pieces in a Rails app that testing can be done simply or you can completely go crazy with it.
- There are many tests you can do ranging from checking individual pieces of code (unit tests) or literally having the computer click through the site and checking functionality (behavioral tests).
- First, let's see a sort of kitchen sink approach. This is done when we use a "scaffold generator" to create app functionality:

Gemfile:

```
gem 'rspec-rails'
```

Install RSpec for Rails:

```
rails generate rspec:install
```

Create scaffold:

```
rails generate scaffold User name:string
```

Migrate DB:

```
rake db:migrate
```

Run RSpec in the `spec` directory:

```
rspec spec --format documentation
```

- Here the scaffold generator creates an entire resource from start to finish complete with a model, view, and controller.
- The tests you see here check all kinds of functionality including routing, controller methods, and even the view output.
- We will now try to finish off the scaffold tests to get all of the specs passing.

## RSpec Lab
- In this lab we will create a mirror of the project we just created together, except without the scaffold generator.
- You will then need to write a few specs and get them to pass just like you saw in the example.

## Homework
- Work on your project :)