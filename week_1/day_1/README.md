# Welcome to BEWD 11!

## The Setup
- For the class we will be using [Koding](https://koding.com/).
- Koding allows you to use a Linux virtual machine in the cloud and do all of your coding work there.
- Koding has a command line interface, file manager, and file editor built in.

## The Command Line

The command line is a terminal giving you direct access to your operating system. You can enter simple commands to perform a variety of functions.

Many of the tasks we need to carry out (such as committing our code) are best performed in the command line.

- In order to learn Ruby without Rails, we must learn how to run Ruby programs on their own.
- To do so, we can simply create "stand-alone" Ruby applications.
- A stand-alone Ruby app consists of one or more Ruby files (files that have a .rb extension).
- Once you have written a Ruby file, you can run the file by typing:
	- ruby file.rb (this would run a Ruby file named file.rb)
- This is the basis of how we will be writing and testing our Ruby applications in the initial portion of this course.

Here are a couple of resources to help you learn:
- [http://cli.learncodethehardway.org/book/](http://cli.learncodethehardway.org/book/)
- [http://praxis.scholarslab.org/scratchpad/bash/](http://praxis.scholarslab.org/scratchpad/bash/)

## In-Class Demonstration
1. Create a new directory
2. Create a new file and add some text to it
3. Search for text inside of the file
4. Create a directory with a file inside of your current directory
5. Practice navigating back and forth between directories
6. Rename one of your directories

## In-Class Lab
1. Create a new folder and `cd` into it.
2. Retrieve your working directory. Hint: Print your working directory :)
3. Create two new files with some text inside.
4. Create a new folder inside your original folder and copy your files into it.
5. Print out the contents of each of these files into the terminal.
6. Try using the `sed` command to replace some text in your files. Here is a good [reference](http://www.folkstalk.com/2012/01/sed-command-in-unix-examples.html).

## Introduction to Git
- Git is a source control management tool.
- Git allows you to store and update your code in a structured way.
- Git includes history of changes you make, so you can create "checkpoints" and track your work better over time.
- Git is an intelligent tool, and does many things for you automatically, but can be tricky to use in some cases. It takes a bit of learning to get fully comfortable with Git.

## What is GitHub?
- GitHub is a service that lets you host Git repositories in the cloud.
	- In other words, they are hosted remotely by GitHub, and can be downloaded from / uploaded to over the internet.
- GitHub allows you to easily distribute code to others by sharing your repository.
- GitHub lets you view your code online easily with a web interface.
- GitHub is free to use as long as you make your code public.
Private repositories cost a monthly fee.

## Git Class Demonstration
- We will practice setting up a new Git repository and pushing it to GitHub.
- Note that empty repositories cannot be added to GitHub.
- Here is a cheatsheet of commands we will be using:

Add files to Git tracking:

```
git add -A
```

Commit files to local Git repository:

```
git commit -m "Initial commit"
```

Add remote to push to:

```
git remote add origin http://yourgithuburl.com
```

Push to remote repository:

```
git push -u origin master
```

## Git Collaboration Strategies
- Git enables a good amount of collaboration strategies that help you work together with other developers on code.
- There are many strategies, but two most common ones - branching and forking.
- In the branching model, each developer is a collaborator on the project and can push directly to the repository. He or she will write code and commit it to a feature or bug branch directly to the repository.
- In the forking model, no developer is a collaborator, but instead work off of a forked copy of the repository. Any changes are then submitted to the repository owner via a "pull request."
- There are pros and cons of both, but especially when you're new to this we would recommend the forking approach.

## Git Fork Lab
- Step 1: Get into groups of two and select one person to own the main repository (owner).
- Step 2: Owner should create a new project with a file and push it to GitHub.
- Step 3: Your coworker should then fork the repository and make a change.
- Step 4: Coworker should now submit a pull request for the change.
- Step 5: Owner should accept the pull request and issue a `git pull` to receive the newest changes locally.
- Step 6: Repeat steps so other partner can be owner.

## Homework
- Your homework is to catch up on Ruby syntax so you're ready for next class.
- Make sure you have completed the following tutorials:
	- [Codecademy Ruby Tutorial](https://www.codecademy.com/tracks/ruby) - The Introduction to Ruby section
	- [Try Ruby](http://tryruby.org)
- Also make sure to review Git and the workflow for collaborating.