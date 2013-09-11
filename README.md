Laravel & Ember Starter Kit
===========================

> A boiler plate for writing web apps using Laravel and Ember

Overview
---------

After creating several projects, I started to notice a pattern in what it takes to begin and continue developing using both Ember and Laravel. I also started to keep a list of "wouldn't it be nice if" type of features. This repository is my attempt at an Ember/Laravel boilerplate to get someone up, running, and developing in a sane and efficient way. 

Goals
-----
The ultimate goal for this Starter Kit would be for someone to be able to develop an Ember Laravel app after following 2 steps. 

1. Download and run composer.json. This handle the Laravel side of the app by installing:
	- Laravel
	- Jeffery Way's Larvel 4 Generator
	- WIP that allows ember to return Ember-Data friendly JSON explained [here](https://gist.github.com/cullymason/6198667). I tried to do it myself but I was in a bit above my head...[Spark](http://github.com/cullymason/spark).
2. Install the [Ember/Laravel Generator](https://github.com/cullymason/generator-ember-laravel) using the command ```npm install -g ember-laravel-generator```. This will handle the Ember.js side of the app and set up:
	- Bower and js dependencies
	- scaffold the ember directory of the App.
	- and generate the Gruntfile. 

Ideally, from there you would be ready to develop an Ember/Laravel app. 


Todo's & Wish List
------------------

> There is still plenty of work to be done and it is outlined here: [Checklist](https://github.com/cullymason/Laravel-Ember-Starter-Kit/issues/1)


Contributing
-------------

I in no way consider myself a Laravel or Ember expert, so I assume there are probably better ways to accomplish what I am trying to do. I am up for any constructive input or contributions that you can provide. My biggest hurdle is to write a composer package to accomplish [this](https://gist.github.com/cullymason/6198667). 

If you would like to contribute, please do so by submitting an issue.
