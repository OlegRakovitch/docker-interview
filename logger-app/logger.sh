#!/bin/bash

while true; do
  echo "`curl -s ${APP_URL}`" >> ${RESPONSES}
  sleep 5
done
