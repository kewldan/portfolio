FROM node:latest

RUN apt update & apt upgrade -y

WORKDIR /usr/app

COPY ./package*.json ./

RUN npm install --omit=dev

COPY ./ ./

RUN npm run build

EXPOSE 7000

ENV PORT 7000
ENV HOSTNAME "0.0.0.0"

ENTRYPOINT ["npm", "run", "start"]