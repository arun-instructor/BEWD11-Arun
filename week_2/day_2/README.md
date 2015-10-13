# Hashes, Loops, and Modules

## Hashes
- Hashes are just a key-value data structure.
- Why do you think they could be useful?
- Let's make one:

```ruby
book_ratings = {
	"Stranger in a Strange Land" => 3,
	"2001: A Space Odyssey" => 5,
	"The Hitchhiker's Guide to the Galaxy" => 4,
	"War and Peace" => 5,
	"I, Robot" => 4
}
```

- What if we wanted to get fancy?

```ruby
books_by_author = {
	"Asimov, Isaac" => {
		"I, Robot" => 4,
		"Foundation" => 5,
		"Foundation and Empire" => 5
	},
	"Tolstoy, Leo" => {
		"War and Peace" => 4,
		"Anna Karenina" => 5,
		"The Death of Ivan Ilyich" => 4
	},
	"Adams, Douglas" => {
		"The Hitchhiker's Guide to the Galaxy" => 4
	},
	"Heinlein, Robert" => {
		"Stranger in a Strange Land" => 3
	},
	"Clarke, Arthur, C." => {
		"2001: A Space Odyssey" => 5
	}
}
```

- This kind of structure is similar to another data structure from JavaScript, called JSON.
- Let's take a look at some JSON data that comes back from an API.
- Take a moment and download [JSONView on the Google Chrome store](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en).
- Next navigate over to [https://daretodiscover.herokuapp.com/users](https://daretodiscover.herokuapp.com/users).
- What types of data do you see here?

## Accessing Hash Values
- Since the data are now named in hashes, which is in contrast to arrays, we now need to pull out the data via the "key":

```ruby
books_by_author["Asimov, Isaac"]
```

## Hash Keys as Symbols
- Hashes can have keys that are either text or "symbols."
- The symbol is another type of data in Ruby that acts a lot like a standard variable:

```ruby
arun = {
	firstname: "Arun",
	lastname: "Sood",
	email: "arun.instructor@gmail.com"
}

puts arun[:email]
```

## Hash Lab
- For this lab we will be working with the RubyMonk chapter [here](https://rubymonk.com/learning/books/1-ruby-primer/chapters/10-hashes-in-ruby/lessons/46-introduction-to-ruby-hashes).
- You should also go through this section of RubyMonk [here](https://rubymonk.com/learning/books/1-ruby-primer/chapters/10-hashes-in-ruby/lessons/47-hashes-in-and-out).

## Loops in Ruby
- There are a wide variety of loops in Ruby that make it versatile.
- There are a few different use cases for these loops, but mostly it just gives you flexibility.
- Let's look at a few examples.

##### Regular for loop
- For loops work with ranges.
- As a reminder, the two dots (..) mean inclusive of the last number, and the three dots (...) mean exclusive.

```ruby
for i in 0..5
	puts "Value of local variable is #{i}"
end
```

##### While loop
- While loops execute while a certain condition remains true.

```ruby
x = 100

while x > 0            
	x -= 1
	puts "This loop will run #{x} more times"
end
```

##### Until loop with global variables
- Until loops are similar to while loops with slightly different syntax.

```ruby
$i = 0
$num = 5

until $i > $num  do
	puts "Inside the loop i = #$i"
	$i += 1
end
```

##### Until with begin

```ruby
$i = 0
$num = 5

begin
	puts("Inside the loop i = #$i" )
	$i +=1;
end until $i > $num
```

##### Operation count
- These methods are usually reserved for if you need to perform an operation an exact number of times.

```ruby
10.times do |i|
	puts "Number is at #{i}"
end
```

##### Upto
- Upto is similar to times but is less popular.

```ruby
1.upto(3) do |i| 
	puts i * 2
end
```

## Modules
- Let's take a deeper look into modules.
- Modules are pieces of code that are to be used like utilities throughout your application.
- Once they are defined they usually have constants and methods inside of them:

```ruby
module Week
	FIRST_DAY = "Sunday"
	
	def Week.weeks_in_month
		puts "You have four weeks in a month"
	end
	
	def Week.weeks_in_year
		puts "You have 52 weeks in a year"
	end
end
```
- FIRST_DAY is a constant, which is basically a value we can use in our application.
- Each of the methods are accessible only inside of the module.

## Require in Ruby
- In order to use modules in your application code you will have to require them in your file.

```ruby
require "week"

puts Week::FIRST_DAY

Week.weeks_in_month
```

## Module Scope
- When it comes to modules, variables and methods have the scope of the containing module.
- When defining methods you can refer to the current module via the keyword `self`.

```ruby
module Week
	FIRST_DAY = "Sunday"
	
	def self.weeks_in_month
		puts "You have four weeks in a month"
	end
	
	def self.weeks_in_year
		puts "You have 52 weeks in a year"
	end
end
```

## Module Exercise
- We will practice our modules by refactoring our current code for the string converter and the calculator exercises.
- Try to move the main logic of the application into modules for each of these exercises and require them in a master Ruby file.
- Call each of the methods defined in your new modules.

## Homework
- In this assignment we will be practicing using iterators in combination with arrays to produce the results we are looking for.
- Let's start with these two arrays:

```ruby
user_names = ["Bob Jones", "Cindy Smith", "Kelsey Scott"]

user_emails = ["bob@gmail.com", "csmith@yahoo.com", "kscott@hotmail.com"]
```

- First let's start by using both loops and iterators to merge the two together.
- Your goal is to use two different approaches to merge the two arrays together so that the final structure looks like this:

```ruby
[
	["Bob Jones", "bob@gmail.com"],
	["Cindy Smith", "csmith@yahoo.com"],
	["Kelsey Scott", "kscott@hotmail.com"]
]
```

- Your goal is to replicate this effect with at least two implementations.
- After you finish this we will take it a step further and use our various iterators and loops to create a proper hash from this data.
- Your goal is to create a final structure that looks like this:

```ruby
[
	{
		name: "Bob Jones",
		email: "bob@gmail.com"
	},
	{
		name: "Cindy Smith",
		email: "csmith@yahoo.com"
	},
	{
		name: "Kelsey Scott",
		email: "kscott@hotmail.com"
	}
]
```

- **Bonus:** Some of this functionality could be repeated throughout your application. As a bonus, factor out some of your code into modules where appropriate, and use `require` to bring the functionality into your app.