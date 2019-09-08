FROM node:latest

COPY . .

RUN npm install

CMD yarn start