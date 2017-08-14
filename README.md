# microGameOfLifeWebGui

## What is it ?
A Web interface for the Game of Life.
Requests the micro-gameOflife-webapi through the REST API.

## How to start the microGameOfLifeWebGui application
1. Transpile the source with webpack `node_modules/webpack/bin/webpack.js --optimize-minimize --define process.env.NODE_ENV="'production'"`
2. Serve the content of the `dist` directory with a Web server
3. The Web server must expose a reverse proxy for the API from `webgui/api/` to `webapi/`

## Use with Docker
### Artifact build
1. Go to the `docker` directory
2. Run the script `build.sh <VERSION>`, replace `<VERSION>` with version number
3. Start the container with `docker run --name mgol-webgui -d -p 80:80 mgol-webgui:<VERSION>`

### Misc
- Setup your development environment : `install_dev_env.sh`
- Run tests suite : `run_mocha_unit_tests.sh`
- Start webpack dev server : `webpack-dev-server.sh start`
- Stop webpack dev server : `webpack-dev-server.sh stop`

## Stack
- React
- Redux
- Immutable
- Axios
- Webpack
- Babel
- NodeJS
- Mocha
- Chai
- Enzyme
