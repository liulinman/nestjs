#!/bin/bash
set -e

echo "检查MySQL是否就绪..."
until mysql -h"$MYSQL_HOST" -u"$MYSQL_USER" -p"$MYSQL_PASSWORD" &> /dev/null; do
  echo "MySQL还未就绪 - 等待..."
  sleep 1
done

echo "MySQL已就绪"
echo "检查数据库是否存在..."

mysql -h"$MYSQL_HOST" -u"$MYSQL_USER" -p"$MYSQL_PASSWORD" -e "USE font;"
if [ $? -eq 0 ]; then
    echo "数据库已存在"
else
    echo "数据库不存在，开始初始化..."
    mysql -h"$MYSQL_HOST" -u"$MYSQL_USER" -p"$MYSQL_PASSWORD" < /docker-entrypoint-initdb.d/init.sql
    echo "数据库初始化完成"
fi 