# Web Requests

## Introduction
- APIs open up business functionality to the public through a structured access approach.
- They give you access to a bunch of functionality that you would otherwise not have.
- A good reference for what you can do with APIs can be found [here](https://www.producthunt.com/e/an-api-for-everything).

## cURL with Typhoeus
- To access APIs you need to be able to request information from web services that are not hosted by you.
- On the front end we have AJAX, on the back end we have cURL.
- cURL uses the same RESTful HTTP protocols we are already familiar with.
- We will be using Typhoeus to make our API requests:

```ruby
gem "typhoeus"
```

##### Making the request

```ruby
request = Typhoeus::Request.new(
    URI.escape("www.example.com"),
    method: :post,
    params: { field1: "a field" },
    headers: { Accept: "text/html" }
)
```

##### Running the request

```ruby
request.run
```

##### Accessing data from response

```ruby
response = request.response.body
```

##### Using response data
- Data will come back as a string. In order to use it we have to parse it into a hash:

```ruby
response_json = JSON.parse(response)
```

## Spotify API Search Lab
- In this lab we will use the Spotify API to search for songs and display them via a UI.
- The front end has been already completed for you [here](spotify_song_search/).
- Your job will be to activate the functionality in a brand new Rails app.
- You will need to review the [Spotify API documentation](https://developer.spotify.com/web-api/) to determine the correct query approach.

## Homework
- For homework think about your final project and come up with a proposal for your idea.
- The project must employ as many of the principles we learned in class as possible.
- A non-exhaustive list of topics can be found here:
	- ActiveRecord
	- Web requests
	- Forms
	- Validations
	- Associations
	- JSON APIs
	- System architecture