FROM node:18-alpine as development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY . ./

EXPOSE ${PORT}

CMD [ "npm", "run", "start:dev" ]