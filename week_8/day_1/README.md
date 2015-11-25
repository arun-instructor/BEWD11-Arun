# Web Requests and OAuth

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

## Introduction to OAuth
- OAuth is a way for a user with an account to authorize a third-party application to access their information or alter their account in some way.
- Imagine if you wanted to build an application that took a person's friend list from Facebook and selected matches for you based on certain criteria (ala Tinder). You would need to authorize Tinder (the third party app) to access your information from Facebook.

## OAuth with Spotify
- OAuth generally needs two things - a developer account, and a back end service that provides the authentication.
- Generally when you create a developer account you are given a client id and a client secret code to identify the app.
- You will then send your user to an authorization endpoint which will allow them to login. You get a one-time use token that you use to request an API secret key.
- You can read all about how Spotify uses OAuth [here](https://developer.spotify.com/web-api/authorization-guide/).
- OAuth can also be handled via Devise with the Omniauthable module. You can read all about it [here](https://github.com/plataformatec/devise/wiki/OmniAuth:-Overview).

## Spotify OAuth Lab / Homework
- In this lab we will be creating functionality to allow users to login with Spotify and edit their saved songs list.
- We will be working with a front end that has been developed for you [here](spotify_song_search/).
- We will be developing this application in a series of steps:
	- Step 1: Integrate the front end into a new Rails application with a controller called Tracks.
	- Step 2: Create a GET route called "auth/spotify" that will map over to an action called "create" in a controller called "Authentications".
	- Step 3: Activate the "Login with Spotify" button. You will need to reference the [Spotify Authorization Guide](https://developer.spotify.com/web-api/authorization-guide/) to know what to do.
	- Step 4: When you retrieve the final Spotify `access_token`, store it in the session. We can now consider the user logged in. Code for storing data to sessions can be found below.
	- Step 5: Show the "View Saved Tracks" and "Save Track" buttons only when the user is logged in.
	- Step 6: Activate the functionality to save and delete a track.

##### Storing data to sessions

```ruby
session[:spotify_access_token] = your_token_here
```

> Note: Make sure all of your sensitive information goes in application.yml, which is set up when you install the Figaro gem.

## Homework Part 2
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