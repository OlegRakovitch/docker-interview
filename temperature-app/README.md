# Temperature APP

This repository contains sources for the temperature app which tells current temperature in Toronto.

It has a single GET endpoint on root path '/' which returns temperature as a string.

Application is configured to listen to the port provided by PORT environment variable.

```
Example:
PORT=8080
Application will respond to GET requests to http://localhost:8080/
```

## Task

You need to build docker image with the application and launch it as a container.
