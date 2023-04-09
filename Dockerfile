# base image
FROM node:latest as node

# expose port
EXPOSE 80

# set working directory
WORKDIR /app

COPY . /app
RUN yarn install
RUN npx react-scripts build

FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/* && rm -rf /etc/nginx/nginx.conf
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=node /app/build /usr/share/nginx/html
