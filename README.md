Positively Bernie
=================

A website for the "Positively Bernie" DVD offered by CCTV Center for Media & Democracy.

Developing
----------

Development of this website is done using [Gulp](http://gulpjs.com/). Dependencies are managed with [npm](https://www.npmjs.com/). To set up your own local development environment:

1. Install [Node.js](https://nodejs.org/), which includes npm.
2. Install project dependencies by running ''npm install'' from within your local project directory.
3. To run a build of the website, run the ''gulp'' command from within your local project directory.

Deploying
---------

This website is configured to be deployed using the [GitHub Pages](https://pages.github.com/) 
feature of GitHub. Deploying is simply a matter of running the ''gulp deploy'' command from within your local project directory once the development environment has been created. The website will be built in your local 'dist' directory, and the contents of which will then be committed to the remote 'gh-pages' branch on GitHub.
