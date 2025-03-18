import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { roles, rolesId } from './roles';
import type { users, usersId } from './users';

export interface user_rolesAttributes {
  userId: number;
  roleId: number;
  createdAt?: Date;
}

export type user_rolesPk = "userId" | "roleId";
export type user_rolesId = user_roles[user_rolesPk];
export type user_rolesOptionalAttributes = "createdAt";
export type user_rolesCreationAttributes = Optional<user_rolesAttributes, user_rolesOptionalAttributes>;

export class user_roles extends Model<user_rolesAttributes, user_rolesCreationAttributes> implements user_rolesAttributes {
  userId!: number;
  roleId!: number;
  createdAt?: Date;

  // user_roles belongsTo roles via roleId
  role!: roles;
  getRole!: Sequelize.BelongsToGetAssociationMixin<roles>;
  setRole!: Sequelize.BelongsToSetAssociationMixin<roles, rolesId>;
  createRole!: Sequelize.BelongsToCreateAssociationMixin<roles>;
  // user_roles belongsTo users via userId
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof user_roles {
    return user_roles.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "用户ID",
      references: {
        model: 'users',
        key: 'id'
      },
      field: 'user_id'
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "角色ID",
      references: {
        model: 'roles',
        key: 'id'
      },
      field: 'role_id'
    }
  }, {
    sequelize,
    tableName: 'user_roles',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
          { name: "role_id" },
        ]
      },
      {
        name: "role_id",
        using: "BTREE",
        fields: [
          { name: "role_id" },
        ]
      },
    ]
  });
  }
}
