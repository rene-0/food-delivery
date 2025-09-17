FROM node:latest
WORKDIR /usr/app
COPY . .
RUN npm i
# CMD [ "npm run dev" ]
# EXPOSE 3000