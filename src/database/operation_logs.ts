import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { users, usersId } from './users';

export interface operation_logsAttributes {
  id: number;
  userId?: number;
  module?: string;
  action?: string;
  description?: string;
  ip?: string;
  userAgent?: string;
  createdAt?: Date;
}

export type operation_logsPk = "id";
export type operation_logsId = operation_logs[operation_logsPk];
export type operation_logsOptionalAttributes = "id" | "userId" | "module" | "action" | "description" | "ip" | "userAgent" | "createdAt";
export type operation_logsCreationAttributes = Optional<operation_logsAttributes, operation_logsOptionalAttributes>;

export class operation_logs extends Model<operation_logsAttributes, operation_logsCreationAttributes> implements operation_logsAttributes {
  id!: number;
  userId?: number;
  module?: string;
  action?: string;
  description?: string;
  ip?: string;
  userAgent?: string;
  createdAt?: Date;

  // operation_logs belongsTo users via userId
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof operation_logs {
    return operation_logs.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "操作用户ID",
      references: {
        model: 'users',
        key: 'id'
      },
      field: 'user_id'
    },
    module: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "操作模块"
    },
    action: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "操作类型"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "操作描述"
    },
    ip: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "操作IP"
    },
    userAgent: {
      type: DataTypes.STRING(500),
      allowNull: true,
      comment: "用户代理",
      field: 'user_agent'
    }
  }, {
    sequelize,
    tableName: 'operation_logs',
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
        name: "user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
  }
}
