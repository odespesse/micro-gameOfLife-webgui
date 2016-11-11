#!/usr/bin/env bash

ACTION=$1
CONTAINER_NAME=webpack-dev-server

if [ $ACTION == "start" ] ; then
    docker run \
        -d \
        --name $CONTAINER_NAME \
        -v "$PWD":/usr/src/app \
        -w /usr/src/app \
        -p 8080:8080 \
        node:6.2 \
        node_modules/webpack-dev-server/bin/webpack-dev-server.js
elif [ $ACTION == "stop" ] ; then
    docker stop $CONTAINER_NAME && docker rm $CONTAINER_NAME
fi
