FROM node:lts-alpine

RUN npm install -g http-server

WORKDIR /portifolioRodrigo

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3050

ENTRYPOINT [ "npm", "start", "http-server", "dist" ]