# Rails in Production

## AWS Overview
- AWS is a powerful suite of services that give you access to many infrastructure options.
- Let's review some of the options in the control panel.

## EC2
- EC2 is the main virtual machine, cloud computing arm of AWS, and where we will go to create our Linux machines to run our software.
- We will go through setting up an EC2 virtual machine.
- Setting up a virtual machine consists of the following steps:
	- Selecting the operating system version: we will be using 14.04
	- Setting up the security group to whitelist IPs
	- Setting up a PEM file that will be used for authentication
	- Logging into the machine via SSH

## Setup
1. Create AWS account [here](http://aws.amazon.com/).
2. Go to EC2 dashboard.
3. Click "Launch Instance"
4. Select Ubuntu.
5. Click "Next"
6. Click "Review and Launch"
7. Click "Edit Security Groups"
8. If you don't already have a security group set up, create a new one.
9. Click "Add Rule" and add HTTP to the security group.
10. Click "Review and Launch" again.
11. Click "Launch".
12. Create a new PEM file key if you don't have one already. You can only download this once so keep it safe!

## Login to Your Server

When the server is up and running, you will be able to log into it. This is handled through the terminal using Secure Shell (SSH).

1. From the EC2 dashboard, select your instance.
2. You will see a "public DNS" option showing your instance's current URL. It will look something like this: ec2-54-148-134-239.us-west-2.compute.amazonaws.com.
3. CD into your directory containing your 
4. Open your terminal and type the following command:

`ssh -i YourPemFile.pem ubuntu@yourpublicdnsurl`

5. When it asks you if you want to continue type "yes" and hit enter.
6. If PEM file is refused you will have to update its permissions:

`chmod 400 YourPemFile.pem`

## Update Server and Install Git

Update the Ubuntu package manager:

`sudo apt-get update`

Install Git:

`sudo apt-get install git`

## Install RVM and Ruby

Install RVM: https://rvm.io/

It will prompt you to run a command like this to get RVM to work:

`source /home/ubuntu/.rvm/scripts/rvm`

Install Ruby:

`rvm install ruby`

Install Rails:

`gem install rails --no-ri --no-rdoc`

## Set up Your Project
1. Git clone your project.
2. Bundle install.
3. Rake db:migrate.
4. Start the server.
5. Good to go!

## Precompiling Assets

##### production.rb

Add your asset types that will be precompiled

```
config.assets.precompile = ['*.js', '*.css', '*.css.erb', '*.png', '*.jpg', '*.woff', '*.ttf']
```

##### If you need to prevent Rails from creating only assets with digests:

[Non Stupid Digest Assets](https://github.com/alexspeller/non-stupid-digest-assets)

```
gem "non-stupid-digest-assets"
```

An example of why you may need to use this is if you're using third party libraries that reference other files.

##### Run your rake task to precompile assets:

```
RAILS_ENV=production rake assets:precompile
```

## Set Up Configuration

##### Open up config/environments/production.rb and change the following value to true:

```
config.serve_static_files = true
```

## Run Your Server

##### Start your server in daemon mode on port 80:

```
rvmsudo rails s -p 80 -d
```