# Arrays and Iterators

## Introduction to Arrays
- The array is a data structure that allows you to hold a "collection" of unstructured data in one place.
- Commonly, arrays hold sets of data that pertain to a certain logical puzzle piece, such as information about a number of users from a database.
- Arrays are also commonly used to represent data that comes back from an API.

##### There are several ways to create an array in Ruby:

```ruby
arr = [1,2,3]
=> [1,2,3]

arr1 = Array.new([4,5,6])
=> [4,5,6]

arr2 = Array.new(3, true)
=> [true, true, true]
```

## Accessing Data in Arrays
- Arrays are set up as a collection of unstructured data, but those data have indexes by which they can be accessed.
- Each array's first index starts at 0.

```ruby
arun = ["Arun", "Sood", "Instructor", "arun.instructor@gmail.com"]
```

- Let's say we wanted to pull out the email address:

```
arun[3]
```

## Array Lab 1
- Let's dig into arrays a little and work through a couple of sample problems.
- We will be using the RubyMonk array tutorial [here](https://rubymonk.com/learning/books/1-ruby-primer/chapters/1-arrays/lessons/2-arrays-introduction).

## Iterators (Enumerators)
- There are many instances where you will want to take data in array form and do some type of operation to each piece.
- Iterators allow you to easily sift through array data and perform an operation on each element.
- Iterators are often referred to as "syntactic sugar" for more complex approaches such as loops.
- The "Ruby Way" is all about using these.

#### .each
- This is likely to be the most common iterator you see.
- It is similar to the forEach loop in JS.

```ruby
[1, 2, 3, 4].each do |item|
	puts item
end
```

- We will see each index in the console as the iterator works its way through the data.
- Arrays are the most common objects that we usually iterate over, but in Ruby there are multiple ways of defining sets of data.

```ruby
%w(1 2 3 4) #["1", "2", "3", "4"]
```

#### .each_with_index
- This is a variant on `.each`, and it allows you to pass the current index into the block:

```ruby
[1, 2, 3, 4].each_with_index do |number, index|
	puts index
end
```

#### .reduce
- Reduce takes a collection of data and "reduces" it to a single value.
- An example of why you would use this may be to sum the values of an array.

```ruby
[1, 2, 3].reduce { |sum, el|
	sum + el
}
```

#### .map
- Map will run an operation for every index of an array.

```ruby
[1, 2, 3, 4].map { |element|
	element + 1
}
```

- Often times you will also want the index to use inside of the block.
- This can be accomplished with the `map.with_index` method.

```ruby
[1, 2, 3, 4].map.with_index { |element, index|
	element + index
}
```

- `.map` can also be a "mutator" method by calling it with a bang - `.map!`. Using this notation will permanently change the original array.

```ruby
[1, 2, 3, 4].map!.with_index { |element, index|
	element + index
}
```

#### Standard FOR loop
- The FOR loop is the "standard" way of working with arrays, but has been given that "syntactic sugar" of iterators to make it more intuitive.
- You can easily use it however to work with arrays:

```ruby
for i in 0...arr.length
	puts arr[i]
end
```

- This approach calculates the stopping point for the loop based on the length of the array.

## Array Lab 2
- We will be practicing array operations using iterators here.
- First, complete the "Basic Array Operations" section of RubyMonk [here](https://rubymonk.com/learning/books/1-ruby-primer/chapters/1-arrays/lessons/34-arrays-the-basics).
- Second, complete the iteration RubyMonk chapter [here](https://rubymonk.com/learning/books/1-ruby-primer/chapters/1-arrays/lessons/3-arrays-iteration).

## Control Flow in Ruby
- Control flow allows you to direct the flow of the application depending on conditions.
- This follows the general flow of if - else with some nuances in the syntax.
- Let's take a simple example:

```ruby
name = "Arun"

if name == "Arun"
	puts "Hello Arun!"
elsif name == "Bob"
	puts "Hello Bob!"
end
```

## Control Flow Lab
- We will work with boolean expressions with the RubyMonk chapter [here](https://rubymonk.com/learning/books/1-ruby-primer/chapters/8-control-structures/lessons/43-boolean-expressions-in-ruby).
- Second, go ahead and go through the if..else construct lesson on RubyMonk [here](https://rubymonk.com/learning/books/1-ruby-primer/chapters/8-control-structures/lessons/41-conditions-using-the-if-statement).

## Homework
- Open the RubyMonk [array tutorial](https://rubymonk.com/learning/books/1-ruby-primer).
- Try these problems (scroll your page down to see problems):
	- Find the length of strings in an array
	- Find the frequency of a string in a sentence
	- Select random elements from an array
	- Find non-duplicate values in an array
	- Check if all elements in an array are Fixnum
- Bonus: Try the "sort the words in a given sentence" challenge.
- Copy the code you write in the windows to text files for each exercise and push the result to GitHub.