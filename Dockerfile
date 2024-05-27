FROM node:22-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package.json package-lock.json ./

COPY src ./

RUN npm install

RUN npm install --save-dev @babel/core @babel/node @babel/preset-env

EXPOSE 7777

ENTRYPOINT ["npm", "run", "dev"]

