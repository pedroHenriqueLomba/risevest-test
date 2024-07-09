FROM node:22.4.0

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm install --save-dev nodemon

EXPOSE 3000

CMD ["npm", "run", "start:dev"]