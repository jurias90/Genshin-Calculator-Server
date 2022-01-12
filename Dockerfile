FROM node:17.3

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4001

CMD ["npm", "start"]