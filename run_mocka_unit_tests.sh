#!/usr/bin/env bash

CONTAINER_NAME=mocka-unit-tests

docker run \
    --rm \
    --name ${CONTAINER_NAME} \
    -v "$PWD":/usr/src/app \
    -w /usr/src/app \
    node:6.2 \
    npm run test
