# Feed Reader Testing in Jasmine.js
This is a project to test a Feed Reader Code in Jasmine.js with jQuery to select DOM elements.

This is a part of Udacity Feeds which has contained the first test "RSS Feeds".

# How to run the app locally

## Quick start
A simple way to go is to clone or download this git repository to your local machine. Locate to the repository folder and  open `index.html`, you should be able to see the feeds load.

## Run the app on a server
1. clone this repository to your project folder
2. ensure you've installed node.js. For more details, please refer to [node.js official website](https://nodejs.org/en/)
3. locate to the project folder root `cd project-folder-name`
4. open terminal, install `http-server` in npm with command line `npm install -g http-server`
5. quick launch an server for this app `http-server`
6. now you can visit `http://127.0.0.1:8080` to view your app

You can find more available options for the http-sever configuration on npm package page of [http-server](https://www.npmjs.com/package/http-server).


# About the tests

Here are the other test suites written in Jasmine.js by Millie Lin.

## Test Suite "The Menu"
By inspecting the menu toggle events in Chrome dev tools, I found the program show and hide the slide menu by toggling class 'menu-hidden' on `<body>`.

By default, the body should be with class menu-hidden.
By using jQuery to select the BODY element and get the class with `attr`. So that the test should detect if the `body` tag contains 'menu-hidden' to check if the toggleClass function runs properly.

The click() event is used to check if the 'menu-hidden' class exists to ensure the function goes well.   

## Test Suite "Initial Entries"
In `app.js`, it runs loadFeed() to load the data from each feed. If the feed load successfully, it will render the HTML inside the feed container `DIV.feed`.

Since `.entry` is an rendered element when feed successfully initialised, by checking if the .feed HTML after loading can see if the entries has been loaded properly.

The loadFeed() is asynchronous so that the test should run beforeEach() and done() to ensure the loadFeed() runs in the test.

By calling `loadFeed(0, function(...))` the test load the first feed which contains initial entries for detection.

## Test Wuite "New Feed Selection"
There are more than one feed in the allFeeds. The loadFeed() function load specified feed with the id(index).

The second feed content should be different from the first feed. So that by comparing the rendered HTML content, we can check if the program loads a different feed with the function instead the same one.

The HTML can be get in jQuery .html() function.
