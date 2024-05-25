FROM node:22-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package.json package-lock.json ./

COPY src ./

RUN npm ci

EXPOSE 7777

ENTRYPOINT ["node", "server.js"]

