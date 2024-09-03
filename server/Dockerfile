FROM node:20.17-alpine AS debug

ADD . /app
WORKDIR /app

RUN yarn

COPY .env.dev .env

CMD ["npx", "majestic"]

FROM node:20.17-alpine AS dev

ADD . /app
WORKDIR /app

RUN yarn

CMD ["npx", "majestic"]
CMD ["npx", "nest", "start"]

FROM node:20.17-alpine AS prod

WORKDIR /app

COPY . .

RUN yarn
RUN npx nest build

CMD ["npx", "majestic"]
CMD ["node", "dist/main.js"]