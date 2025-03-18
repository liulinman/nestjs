-- 设置字符集为 utf8mb4
SET NAMES utf8mb4;

-- 如果数据库不存在则创建，并指定字符集
CREATE DATABASE IF NOT EXISTS font CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- 使用数据库
USE font;

-- 用户表
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE COMMENT '用户名',
    password VARCHAR(255) NOT NULL COMMENT '密码',
    email VARCHAR(100) UNIQUE COMMENT '邮箱',
    phone VARCHAR(20) UNIQUE COMMENT '手机号',
    avatar VARCHAR(255) COMMENT '头像URL',
    status TINYINT(1) DEFAULT 1 COMMENT '状态：0-禁用，1-启用',
    last_login DATETIME COMMENT '最后登录时间',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间'
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci COMMENT '用户表';

-- 角色表
CREATE TABLE IF NOT EXISTS roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE COMMENT '角色名称',
    description VARCHAR(200) COMMENT '角色描述',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间'
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci COMMENT '角色表';

-- 用户角色关联表
CREATE TABLE IF NOT EXISTS user_roles (
    user_id INT NOT NULL COMMENT '用户ID',
    role_id INT NOT NULL COMMENT '角色ID',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    PRIMARY KEY (user_id, role_id),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci COMMENT '用户角色关联表';

-- 权限表
CREATE TABLE IF NOT EXISTS permissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE COMMENT '权限名称',
    code VARCHAR(50) NOT NULL UNIQUE COMMENT '权限编码',
    description VARCHAR(200) COMMENT '权限描述',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间'
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci COMMENT '权限表';

-- 角色权限关联表
CREATE TABLE IF NOT EXISTS role_permissions (
    role_id INT NOT NULL COMMENT '角色ID',
    permission_id INT NOT NULL COMMENT '权限ID',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    PRIMARY KEY (role_id, permission_id),
    FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE,
    FOREIGN KEY (permission_id) REFERENCES permissions(id) ON DELETE CASCADE
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci COMMENT '角色权限关联表';

-- 菜单表
CREATE TABLE IF NOT EXISTS menus (
    id INT AUTO_INCREMENT PRIMARY KEY,
    parent_id INT DEFAULT 0 COMMENT '父菜单ID',
    name VARCHAR(50) NOT NULL COMMENT '菜单名称',
    path VARCHAR(100) COMMENT '路由路径',
    component VARCHAR(100) COMMENT '组件路径',
    icon VARCHAR(50) COMMENT '图标',
    sort INT DEFAULT 0 COMMENT '排序',
    status TINYINT(1) DEFAULT 1 COMMENT '状态：0-禁用，1-启用',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间'
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci COMMENT '菜单表';

-- 操作日志表
CREATE TABLE IF NOT EXISTS operation_logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT COMMENT '操作用户ID',
    module VARCHAR(50) COMMENT '操作模块',
    action VARCHAR(50) COMMENT '操作类型',
    description TEXT COMMENT '操作描述',
    ip VARCHAR(50) COMMENT '操作IP',
    user_agent VARCHAR(500) COMMENT '用户代理',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci COMMENT '操作日志表';
