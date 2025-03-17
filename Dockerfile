# 构建阶段
FROM node:16 AS builder

WORKDIR /app

COPY package*.json ./
COPY pnpm-lock.yaml ./

RUN npm install -g pnpm
RUN pnpm install

COPY . .
RUN pnpm build

# 生产阶段
FROM node:16-slim

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY package*.json ./

EXPOSE 3000
CMD ["node", "dist/main"]
