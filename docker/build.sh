#!/usr/bin/env bash

VERSION=$1

docker run \
    --rm \
    -v "$(pwd)/..":/usr/src/app \
    -w /usr/src/app \
    node:14.0.0-alpine \
    node_modules/webpack/bin/webpack.js --optimize-minimize --define process.env.NODE_ENV="'production'"

cp -pr "../dist" .
sed -i "s/<VERSION>/${VERSION}/g" Dockerfile
docker build -t "mgol-webgui:${VERSION}" .
sed -i "s/${VERSION}/<VERSION>/g" Dockerfile
rm -R "dist"
