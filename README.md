Laravel & Ember Starter Kit
===========================

> A boiler plate for writing web apps using Laravel and Ember

Overview
---------

After creating several projects, I started to notice a pattern in what it takes to begin and continue developing using both Ember and Laravel. Though this is based on my current work flow, I am certain there are ways it could be improved and augmented. Please feel free to help. 

Goals
-----

- Integrate Ember tasks into Artisan commands (php artisan generate:model --Ember:true)
- Extend Laravel Model so that it spits out Ember Friendly JSON described in this [gist](https://gist.github.com/cullymason/6198667)
- Integrate a JS package manager (Bower maybe?)
- Keep it stream lined but easily expandable. 

Todo's & Wish List
------------------

- create a folder structure in the app for the ember apps (i.e. controllers, views, etc…)
- Write a .Gruntfile that:
	- JSHint's the .js files
	- Concats all of the .js files into a build file
	- watch functionality
	- minify script
	- LESS support
	- Grunt Plugins:  
		- grunt-contrib-uglify
		- grunt-contrib-concat
		- grunt-shell
		- grunt-ember-templates
		- grunt-contrib-cssmin
		- grunt-contrib-connect
		- grunt-contrib-watch
		- grunt-contrib-jshint;
		- grunt-contrib-clean;
- Use Jeffery Way's Laravel 4 Generator
- Extend Laravel Model so it works well automatically with ember-data
- Build an generator that builds both/either the Ember and Laravel Models, Routes, Controllers, and Views.