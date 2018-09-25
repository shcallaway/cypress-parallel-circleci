# Cypress Parallel Circle CI

An example of how to run Cypress tests in parallel on Circle CI.

[![CircleCI](https://circleci.com/gh/shcallaway/server.svg?style=svg)](https://circleci.com/gh/shcallaway/server)

```
docker build -t server .
docker create --name server server:latest
docker start server
```
