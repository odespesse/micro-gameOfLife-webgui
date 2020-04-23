# DESCRIPTION:    Create the microGameOfLife web GUI in a container
# AUTHOR:         Olivier Despesse <olived19@gmail.com>
# COMMENTS:
#   This file describes how to build the microGameOfLife web GUI
#   in a container with all dependencies installed.
# USAGE:
#   # Build image
#   docker build -t mgol-webgui:<VERSION> .
#
#   # Run service
#   docker run --name mgol-webgui -d -p 80:80 mgol-webgui:<VERSION>
#

# Base docker image
FROM nginx:1.18.0-alpine
MAINTAINER Olivier Despesse <olived19@gmail.com>

COPY vhost.conf /etc/nginx/conf.d/default.conf
COPY dist/ /usr/share/nginx/html
