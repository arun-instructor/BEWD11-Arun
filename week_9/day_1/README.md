# OAuth

## Introduction to OAuth
- OAuth is a way for a user with an account to authorize a third-party application to access their information or alter their account in some way.
- Imagine if you wanted to build an application that took a person's friend list from Facebook and selected matches for you based on certain criteria (ala Tinder). You would need to authorize Tinder (the third party app) to access your information from Facebook.

## OAuth with Spotify
- OAuth generally needs two things - a developer account, and a back end service that provides the authentication.
- Generally when you create a developer account you are given a client id and a client secret code to identify the app.
- You will then send your user to an authorization endpoint which will allow them to login. You get a one-time use token that you use to request an API secret key.
- You can read all about how Spotify uses OAuth [here](https://developer.spotify.com/web-api/authorization-guide/).
- OAuth can also be handled via Devise with the Omniauthable module. You can read all about it [here](https://github.com/plataformatec/devise/wiki/OmniAuth:-Overview).

## Spotify OAuth Lab
- In this lab we will be creating functionality to allow users to login with Spotify and edit their saved songs list.
- We will be working with a front end that has been developed for you [here](spotify_song_search/).
- We will be developing this application in a series of steps:
	- Step 1: Create a GET route called "auth/spotify" that will map over to an action called "create" in a controller called "Authentications".
	- Step 2: Activate the "Login with Spotify" button. You will need to reference the [Spotify Authorization Guide](https://developer.spotify.com/web-api/authorization-guide/) to know what to do.
	- Step 3: When you retrieve the final Spotify `access_token`, store it in the session. We can now consider the user logged in. Code for storing data to sessions can be found below.
	- Step 4: Show the "View Saved Tracks" and "Save Track" buttons only when the user is logged in.
	- Step 5: Activate the functionality to save and delete a track.

##### Storing data to sessions

```ruby
session[:spotify_access_token] = your_token_here
```

> Note: Make sure all of your sensitive information goes in application.yml, which is set up when you install the Figaro gem.