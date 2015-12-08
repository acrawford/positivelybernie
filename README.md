Positively Bernie
=================

A website for the "Positively Bernie" DVD offered by CCTV Center for Media & Democracy.

Developing
----------

This website is based on the [Gulp Webapp](https://github.com/yeoman/generator-gulp-webapp) Yeoman generator.

Development of this website is done using [Gulp](http://gulpjs.com/). Dependencies are managed with [npm](https://www.npmjs.com/) and [Bower](http://bower.io). To set up your own local development environment:

1. Install [Node.js](https://nodejs.org/), which includes npm.
2. Install project dependencies by running `npm install & bower install` from within your local project directory.

To run your local development environment, run the 'gulp serve' command from within your local project directory. The project should now be available at:  
`http://localhost:9000/`

Saving changes to files will rebuild website assets in the local development environment and will automatically reload in your web browser.

Commits should be made to the `master` branch (or a branch of the `master` branch). Commits should **not** be made to the `gh-pages` branch directly, but rather only via the `gulp deploy` task. The `gh-pages` branch is used for deployments only. There is no need to manually checkout the `gh-pages` branch (this is done programatically via the `gulp deploy` task).

Deploying
---------

This website is configured to be deployed using the [GitHub Pages](https://pages.github.com/) feature of GitHub. To deploy, run the following from within your local project directory:  
`gulp deploy`

To make a production-ready build of the app in the `dist` directory, run:  
`gulp`

To preview the production-ready build:  
`gulp serve:dist`
