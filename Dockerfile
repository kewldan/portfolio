FROM node:lts
WORKDIR /usr/app

ENV TZ="Europe/Moscow"

COPY package.json package-lock.json ./
RUN npm ci

ENV NODE_ENV=production

COPY next.config.mjs postcss.config.js tailwind.config.ts tsconfig.json ./
COPY ./public ./public
COPY ./messages ./messages
COPY ./src ./src

RUN npm run build

CMD ["npm", "run", "start"]