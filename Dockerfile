#Stage 1 build
FROM node:14-alpine3.15 as build

WORKDIR /app
COPY package* ./app/

RUN npm config list

RUN npm ci

COPY . .

RUN npm run build

#Stage 2
FROM nginx:1.21.6-alpine3.15 as runner

WORKDIR /usr/share/nginx/html

COPY --from=build ./app/build .

# start app
ENTRYPOINT ["nginx", "-g", "daemon off;"]
