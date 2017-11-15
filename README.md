# README for Sudoku Project

This repository contains the code for a Sudoku API written in Ruby on Rails and a client application written in Javascript/React. The API can be used with different front-end clients and the client can work with another API that responds to the same API calls.

The API will generate a new Sudoku puzzle when it receives a GET call to /api/v1/game. The Rails code starts with a valid Sudoku solution and then uses one thousand transforms to generate a completely new, valid solution. It then returns that solution with a starting board that randomly reveals some of the values. The API can also store the time a game is finished along with the user initials in the database. The top ten times can be retrieved with another API call.

The front-end application is written in Javascript utilizing the React/Redux frameworks. It is a single page application that uses the react-router to emulate page changes. The API calls are made using Redux middleware for asynchronous data retrieval. The application state is maintained in the Redux store.

In order to run the API you need to issue the 'bundle install' command in order to install the Ruby gems. After the gems are install start the Rails application by running 'rails server -p 3001'. The default port of 3000 is also what is used by the Javascript web server so 3001 is specified in order to resolve the conflict.

To install the client application, run 'npm install'. When the node modules have completed installation then run 'npm start'. This will start the server and bring you to the home page. You can follow the links to learn more about Sudoku, start a game, or see the best times. The client application is coded to access the API at port 3001 so you would need to change that code if using an API with a different port number.

Please enjoy the game!

