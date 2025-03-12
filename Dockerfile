# Build stage
FROM node:18-alpine AS builder
WORKDIR /app

# Copy dependencies & cài đặt
COPY package.json yarn.lock ./
RUN yarn install

# Copy toàn bộ source code và build
COPY . .

CMD ["yarn", "build"]
