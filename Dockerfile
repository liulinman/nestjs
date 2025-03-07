# 使用 Node.js 官方镜像作为基础镜像
FROM node:16 AS production

# 设置工作目录
WORKDIR /app

COPY package.json /app/

# 安装应用的依赖
RUN npm install --production

# 复制 dist 文件夹到容器中
COPY dist ./dist

# 设置环境变量（生产环境）
ENV NODE_ENV=production

# 暴露应用的端口
EXPOSE 3000

# 启动 NestJS 应用
CMD ["node", "dist/main"]
