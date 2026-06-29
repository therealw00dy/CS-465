# CS-465

# Architecture
The different types of development are interestingly different. Working with just the html and javascript is straightfoward and you lay out each part all in their own clumps. When starting to use the SPA, you start breaking it up into its own methods so that you can call upon other areas and leave the main code relatively bare, just calling to the other files to be used only when needed. NoSQL stores data as flexible JSON like objects, which is similar to the data in our Express API, eliminating the need for complex transitions between areas.

# Functionality
JSON is a data format, not a coding language, meaning it is only for data storage and not to run any logic or make decisions. JSON is simple and can be shared between multiple different systems, which is part of what makes the full stack application easily designed, allowing simple data transfer while the coding languages like JavaScript can push and pull the data to make a working application.
The entire last portion of the development was refactoring the code to improve functionality. We broke up big HTMLs into smaller files to then call when needed with versatile functionality. This also allowed to easily call a method from a specific area instead of having to create a new one for each page instance.

# Testing
We use the methods to actually run the application, using GET, POST, PUT, and DELETE to give the signal our intent. Endpoints are the locations of these requests, like the calls that dealt with the trips we would need to send to /api/trips and the login attempts would go to /api/login. When we added security, we now had to have a specific key for an account for it to be able to log in, if we sent a login request without the key, it would deny it and we would not be able to access our functions.

# Reflection
This course was my first step into full stack applications and using every piece of software we used. It was my first time really touching HTML, JavaScript, JSON, MongoDB, Postman, etc. It also really pushed further into the idea of implementation rather than creation, which was almost like learning how to code all over again, since the logic is not about how I can make it, but how I will just implement many existing things as well as creating some of my own processes if needed. This class gave me many more skills from languages and data, to my thought process when going into projects.
