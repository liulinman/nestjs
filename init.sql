SET NAMES utf8mb4;

-- 如果数据库不存在则创建，并指定字符集
CREATE DATABASE IF NOT EXISTS font CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- 使用数据库
USE font;

-- ----------------------------
-- Table structure for cookie -test
-- ----------------------------
CREATE TABLE IF NOT EXISTS cookie (
  cookie text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  type varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (type) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Table structure for english
-- ----------------------------
CREATE TABLE IF NOT EXISTS english  (
  id int NOT NULL AUTO_INCREMENT,
  english_word varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '英语单词',
  english_phonetic varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '音标',
  english_type varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '中文',
  english_chinese varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '类型',
  english_note varchar(255) DEFAULT NULL COMMENT '笔记',
  english_level varchar(255) DEFAULT NULL,
  english_reference varchar(255) DEFAULT NULL,
    -- 自动添加创建时间
  english_createTime DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  
  -- 自动添加更新时间
  english_updateTime DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
