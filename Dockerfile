FROM node:lts
WORKDIR /usr/app

ENV TZ="Europe/Moscow"

COPY package.json package-lock.json ./
COPY ./.env ./.env
COPY ./prisma ./prisma
RUN npm ci

ENV NODE_ENV=production

COPY next.config.mjs .env postcss.config.js tailwind.config.ts tsconfig.json ./
COPY ./public ./public
COPY ./src ./src

RUN npm run build

CMD ["npm", "run", "start"]