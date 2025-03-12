# Build stage
FROM node:18-alpine AS builder
WORKDIR /app

# Copy dependencies & install
COPY package.json yarn.lock ./
RUN yarn install

# Copy toàn bộ source code và build
COPY . .
RUN yarn build

# Xuất thư mục build ra ngoài container (tùy vào cấu hình docker-compose)
CMD ["sh", "-c", "cp -r /app/build /output && echo 'Build copied to /output'"]
