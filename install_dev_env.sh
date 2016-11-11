#!/usr/bin/env bash

PROJECT_DIRECTORY=$(pwd)

printf 'Pulling NodeJS v6.2 image...\n'
docker pull node:6.2
printf '** Infrastructure **\n'
printf 'Installing Webpack...\n'
docker run -it --rm -v "$PROJECT_DIRECTORY":/usr/src/app -w /usr/src/app node:6.2 npm install --save-dev webpack webpack-dev-server
printf '** Lib **\n'
printf 'Installing Babel...\n'
docker run -it --rm -v "$PROJECT_DIRECTORY":/usr/src/app -w /usr/src/app node:6.2 npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react
printf 'Installing Immutable...\n'
docker run -it --rm -v "$PROJECT_DIRECTORY":/usr/src/app -w /usr/src/app node:6.2 npm install --save immutable
printf '** Tests **\n'
printf 'Installing Mocha and Chai...\n'
docker run -it --rm -v "$PROJECT_DIRECTORY":/usr/src/app -w /usr/src/app node:6.2 npm install --save-dev mocha chai chai-immutable
printf 'Installing Jsdom...\n'
docker run -it --rm -v "$PROJECT_DIRECTORY":/usr/src/app -w /usr/src/app node:6.2 npm install --save-dev jsdom

sudo chown -R $USER:$USER "$PROJECT_DIRECTORY"/{node_modules,package.json,webpack.config.js}
