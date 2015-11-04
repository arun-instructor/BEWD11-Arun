# Associations Continued

## Many-to-Many Association
- The many to many association is used when you need to associate one piece of data with another like we saw with has_many belongs_to, but where neither of the models own each other.
- As an example, imagine if you had a Student model and a Course model. There must be a way to link students with the courses they are taking, but you can't say a student owns a course and a course belongs to a student. The solution would be to create a model called Enrollment which would "join" the two other models together.
- This is known as the join table, and rails calls this a "has many through" relationship.
- Let's take a look at this example as it pertains to models:

##### student.rb

```ruby
class Student < ActiveRecord::Base
	has_many :enrollments
	has_many :courses, through: :enrollments
end
```

##### enrollment.rb

```ruby
class Enrollment < ActiveRecord::Base
	belongs_to :student
	belongs_to :course
end
```

##### course.rb

```ruby
class Course < ActiveRecord::Base
	has_many :enrollments
	has_many :students, through: :enrollments
end
```

## Many-to-Many on the View
- So now the question is: how do we represent a many-to-many association on the view side?
- What we want to happen is to be able to select as in our example a few courses for a student to enroll in.
- Likely the best way to represent this with a form is through a multi-select field.

```html
<select multiple>
	<option>Chemistry</option>
	<option>English</option>
	<option>History</option>
</select>
```

- In Rails this can be accomplished through a collection_select helper:

```ruby
<%= collection_select(:student, :course, Course.all, :id, :name, {selected: @student.courses.ids}, {multiple: true}) %>
```

## Many-to-Many in the Routes
- So the last question we may have is: how do we represent this relationship in the routes?
- Many-to-many relationships don't have a set routing convention like we saw with one to many, but there are some good practices.
- One of the best practices is to use "member" and "collection" routes.
- Let's say we wanted to view and create enrollments for a student:

```ruby
resources :students do
	member do
		get "/enrollments" => "enrollments#index"
		post "/enrollments" => "enrollments#create"
	end
end

resources :courses
```

## Many-to-Many Lab / Homework
- In this lab we will practice building out the views and the appropriate functionality for the app above.
- Your task is to set up views and actions for those views that will do the following: create a student, create a course, create an enrollment for a particular student.

## Challenge
- This week's challenge will be to create a word matcher application that matches words in the dictionary with entered text.
- You can find the problem [here](https://github.com/arun-curriculum/Problem-Solving/tree/master/english_word_matching).

## Extra Reading
- There are many additional types of associations that do all sorts of crazy things with Rails.
- You can read about them [here](http://guides.rubyonrails.org/association_basics.html).
- A popular interview question is on the "polymorphic" association.