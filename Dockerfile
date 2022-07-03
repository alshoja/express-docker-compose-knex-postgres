FROM node:16.15-alpine3.14
WORKDIR /app

COPY package*.json ./

RUN npm install -g npm@8.5.5
RUN npm install

COPY ./src .

EXPOSE 5000

# CMD node index.js
