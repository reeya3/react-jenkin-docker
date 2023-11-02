#node block
FROM node:alpine3.17 as nodework
WORKDIR /myapp
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# #nginx block

# FROM nginx:1.20.0-alpine
# WORKDIR /usr/share/nginx/html
# RUN rm -rf ./*
# COPY --from=nodework /myapp/build .
# ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
