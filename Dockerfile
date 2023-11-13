FROM node:14-alpine

WORKDIR /app

#COPY package*.json .
COPY . .

RUN npm install
#RUN npm ci --only=production

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]