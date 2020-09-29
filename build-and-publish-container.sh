#!/usr/bin/env bash
docker build -t "raceonmouse/test:latest" -f ./Dockerfile .
docker push "raceonmouse/test:latest"

