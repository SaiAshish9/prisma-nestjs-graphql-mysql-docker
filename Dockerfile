FROM node:12.13-alpine

WORKDIR /app

COPY package*.json ./

RUN npm run install

COPY .  .

RUN npm run build

CMD ["node","dist/main"]