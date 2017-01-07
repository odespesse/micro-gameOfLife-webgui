# DESCRIPTION:    Create the microGameOfLife web GUI in a container
# AUTHOR:         Olivier Despesse <olived19@gmail.com>
# COMMENTS:
#   This file describes how to build the microGameOfLife web GUI
#   in a container with all dependencies installed.
# USAGE:
#   # Build image
#   docker build -t mgol-webgui: .
#
#   # Run service
#   docker run --name mgol-webgui: -d mgol-webgui
#

# Base docker image
FROM nginx:1.11
MAINTAINER Olivier Despesse <olived19@gmail.com>

COPY dist/ /usr/share/nginx/html
