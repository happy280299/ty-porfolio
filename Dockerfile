FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/build .
RUN sed -i 's/listen       80;/listen       3002;/g' /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]
