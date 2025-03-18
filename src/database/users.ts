import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { operation_logs, operation_logsId } from './operation_logs';
import type { roles, rolesId } from './roles';
import type { user_roles, user_rolesId } from './user_roles';

export interface usersAttributes {
  id: number;
  username: string;
  password: string;
  email?: string;
  phone?: string;
  avatar?: string;
  status?: number;
  lastLogin?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export type usersPk = "id";
export type usersId = users[usersPk];
export type usersOptionalAttributes = "id" | "email" | "phone" | "avatar" | "status" | "lastLogin" | "createdAt" | "updatedAt";
export type usersCreationAttributes = Optional<usersAttributes, usersOptionalAttributes>;

export class users extends Model<usersAttributes, usersCreationAttributes> implements usersAttributes {
  id!: number;
  username!: string;
  password!: string;
  email?: string;
  phone?: string;
  avatar?: string;
  status?: number;
  lastLogin?: Date;
  createdAt?: Date;
  updatedAt?: Date;

  // users hasMany operation_logs via userId
  operationLogs!: operation_logs[];
  getOperationLogs!: Sequelize.HasManyGetAssociationsMixin<operation_logs>;
  setOperationLogs!: Sequelize.HasManySetAssociationsMixin<operation_logs, operation_logsId>;
  addOperationLog!: Sequelize.HasManyAddAssociationMixin<operation_logs, operation_logsId>;
  addOperationLogs!: Sequelize.HasManyAddAssociationsMixin<operation_logs, operation_logsId>;
  createOperationLog!: Sequelize.HasManyCreateAssociationMixin<operation_logs>;
  removeOperationLog!: Sequelize.HasManyRemoveAssociationMixin<operation_logs, operation_logsId>;
  removeOperationLogs!: Sequelize.HasManyRemoveAssociationsMixin<operation_logs, operation_logsId>;
  hasOperationLog!: Sequelize.HasManyHasAssociationMixin<operation_logs, operation_logsId>;
  hasOperationLogs!: Sequelize.HasManyHasAssociationsMixin<operation_logs, operation_logsId>;
  countOperationLogs!: Sequelize.HasManyCountAssociationsMixin;
  // users belongsToMany roles via userId and roleId
  roleIdRolesUserRoles!: roles[];
  getRoleIdRolesUserRoles!: Sequelize.BelongsToManyGetAssociationsMixin<roles>;
  setRoleIdRolesUserRoles!: Sequelize.BelongsToManySetAssociationsMixin<roles, rolesId>;
  addRoleIdRolesUserRole!: Sequelize.BelongsToManyAddAssociationMixin<roles, rolesId>;
  addRoleIdRolesUserRoles!: Sequelize.BelongsToManyAddAssociationsMixin<roles, rolesId>;
  createRoleIdRolesUserRole!: Sequelize.BelongsToManyCreateAssociationMixin<roles>;
  removeRoleIdRolesUserRole!: Sequelize.BelongsToManyRemoveAssociationMixin<roles, rolesId>;
  removeRoleIdRolesUserRoles!: Sequelize.BelongsToManyRemoveAssociationsMixin<roles, rolesId>;
  hasRoleIdRolesUserRole!: Sequelize.BelongsToManyHasAssociationMixin<roles, rolesId>;
  hasRoleIdRolesUserRoles!: Sequelize.BelongsToManyHasAssociationsMixin<roles, rolesId>;
  countRoleIdRolesUserRoles!: Sequelize.BelongsToManyCountAssociationsMixin;
  // users hasMany user_roles via userId
  userRoles!: user_roles[];
  getUserRoles!: Sequelize.HasManyGetAssociationsMixin<user_roles>;
  setUserRoles!: Sequelize.HasManySetAssociationsMixin<user_roles, user_rolesId>;
  addUserRole!: Sequelize.HasManyAddAssociationMixin<user_roles, user_rolesId>;
  addUserRoles!: Sequelize.HasManyAddAssociationsMixin<user_roles, user_rolesId>;
  createUserRole!: Sequelize.HasManyCreateAssociationMixin<user_roles>;
  removeUserRole!: Sequelize.HasManyRemoveAssociationMixin<user_roles, user_rolesId>;
  removeUserRoles!: Sequelize.HasManyRemoveAssociationsMixin<user_roles, user_rolesId>;
  hasUserRole!: Sequelize.HasManyHasAssociationMixin<user_roles, user_rolesId>;
  hasUserRoles!: Sequelize.HasManyHasAssociationsMixin<user_roles, user_rolesId>;
  countUserRoles!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof users {
    return users.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "用户名",
      unique: "username"
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "密码"
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "邮箱",
      unique: "email"
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "手机号",
      unique: "phone"
    },
    avatar: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "头像URL"
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 1,
      comment: "状态：0-禁用，1-启用"
    },
    lastLogin: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "最后登录时间",
      field: 'last_login'
    }
  }, {
    sequelize,
    tableName: 'users',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "username",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "username" },
        ]
      },
      {
        name: "email",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "phone",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "phone" },
        ]
      },
    ]
  });
  }
}
