# Dockerfile

# base image
FROM node:14-alpine

# create & set working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

## copy source files
COPY package.json ./
COPY yarn.lock ./

# install dependencies
RUN yarn install --prod

# copy app source code
COPY . .

# start app
RUN yarn build
EXPOSE 3000
CMD yarn start