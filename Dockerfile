FROM node
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3030
CMD ["npm", "run", "dev"]

