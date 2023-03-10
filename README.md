# podcaster

App for searching podcasts from Apple

# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This application is composed of several methodologies or framewors:

Redux\
Redux-Saga\
React Route to enrouting\
Webpack contains in react-scripts \
Typescript\
esLint\
axios\
Prettier
...

The purpose of this application is to provide a solution to the problem posed by Zara.com.

Possible improvements:

- Apply [react-virtualized](https://www.npmjs.com/package/react-virtualized) for table and listing. This way there would be less rows loaded in the DOM.

* State handling could be avoided by using context api instead of Redux

## Step-by-step instructions for operation

The application needs to have node (e.g v18.14.0) and npm (e.g. 9.3.1 ) installed

1. Run `npm install` to install dependencies and configuration
2. Run `npm start `

Note: There is data persistence, so that if it already exists in the localstorage it will not be requested again from the server.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run lint`

Execute and pass Eslint to the project. If execute, the `npm run lint:fix` command automatically fixes fixable bugs.\
