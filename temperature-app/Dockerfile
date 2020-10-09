FROM node:14.13.1-alpine

WORKDIR /app

COPY package.json /app/package.json

RUN npm install

COPY src /app/src

CMD [ "node", "/app/src/index.js" ]
