FROM node:16.15-alpine3.14
WORKDIR /app

COPY package.json .

RUN npm install

COPY /app .

EXPOSE 3000

CMD [ "npm", "start" ]