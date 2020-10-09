# Loger APP

This repository contains sources for the logger app which makes requests to specified location and saves responses to specified directory.

Application is configured to make requests to the endpoint provided by APP_URL environment variable and save responses on path provided by RESPONSES environment variable.

```
Example:
APP_URL=http://endpoint:1234/
RESPONSES=/temperatures/toronto.txt
Application will make GET requests to http://endpoint:1234/ and save responses to /temperatures/toronto.txt
```

## Task

You need to create dockerfile for the application, build docker image with the application and launch it as a container. All responses need to be saved to the host machine.
