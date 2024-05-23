FROM node:22-alpine

WORKDIR /app

COPY package.json package-lock.json ./

COPY src ./

RUN npm ci

ENTRYPOINT ["node", "server.js"]

