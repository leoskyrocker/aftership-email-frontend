Aftership Email Frontend
=========

A ReactJS Frontend (Flex-based and Responsive) to empower users sending emails. Bootstrapped with [create-react-app](https://github.com/facebook/create-react-app).

## Running Locally

`REACT_APP_API_BASE_URL=localhost:{PORT} npm start`

`REACT_APP_API_BASE_URL` is the url of the backend API you'd like to talk to.

Visit the app via browser at: `localhost:3000` (default url)

## Deploying on Heroku

In general, follow the [standard instructions](https://devcenter.heroku.com/articles/deploying-nodejs) on deploying NodeJS app.

In a nutshell, it boils down to:
1. Create a Heroku account
2. Run in terminal:
	```
	heroku login
	heroku create
	```
3. Set this env var in Heroku to the backend url

	e.g. `REACT_APP_API_BASE_URL = https://email-api.herokuapp.com`
4. `git push heroku master`

## Webpack / Babel / Advanced Config

This project is bootstrapped with [create-react-app](https://github.com/facebook/create-react-app) because we don't need any advanced configuration with babel, webpack, etc.
However, it can be easily [ejected](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#npm-run-eject) when it's neccessary.

## Tests

Our tests use [Mocha](https://github.com/mochajs/mocha) (Framework), [Chai](https://github.com/chaijs/chai) (Assertions), and [Nock](https://github.com/node-nock/nock) (HTTP Requests Mock).

Run  `npm test` under the project root. See more detail on what it does in package.json.

## Setup Linting

We follow the airbnb styles with a number of overrides. Check .eslint.yml for more details.

Please check out the [integration docs](https://eslint.org/docs/user-guide/integrations) for setting up eslint in your favorite IDE.

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.
