class Book
	attr_accessor :library

	def initialize
		@library = []
		@book_count = 0
	end

	def all
		return @library
	end

	def add(book)
		@library.push({
			id: @book_count += 1,
			book: book
		})
	end

	def show(id)
		@library.each do |book|
			if book[:id] == id
				return book
			end
		end
	end

	def remove(id)
		@library.each_with_index do |book, index|
			if book[:id] == id
				@library.slice!(index, 1)
			end
		end
	end
end