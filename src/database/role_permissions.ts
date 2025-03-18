import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { permissions, permissionsId } from './permissions';
import type { roles, rolesId } from './roles';

export interface role_permissionsAttributes {
  roleId: number;
  permissionId: number;
  createdAt?: Date;
}

export type role_permissionsPk = "roleId" | "permissionId";
export type role_permissionsId = role_permissions[role_permissionsPk];
export type role_permissionsOptionalAttributes = "createdAt";
export type role_permissionsCreationAttributes = Optional<role_permissionsAttributes, role_permissionsOptionalAttributes>;

export class role_permissions extends Model<role_permissionsAttributes, role_permissionsCreationAttributes> implements role_permissionsAttributes {
  roleId!: number;
  permissionId!: number;
  createdAt?: Date;

  // role_permissions belongsTo permissions via permissionId
  permission!: permissions;
  getPermission!: Sequelize.BelongsToGetAssociationMixin<permissions>;
  setPermission!: Sequelize.BelongsToSetAssociationMixin<permissions, permissionsId>;
  createPermission!: Sequelize.BelongsToCreateAssociationMixin<permissions>;
  // role_permissions belongsTo roles via roleId
  role!: roles;
  getRole!: Sequelize.BelongsToGetAssociationMixin<roles>;
  setRole!: Sequelize.BelongsToSetAssociationMixin<roles, rolesId>;
  createRole!: Sequelize.BelongsToCreateAssociationMixin<roles>;

  static initModel(sequelize: Sequelize.Sequelize): typeof role_permissions {
    return role_permissions.init({
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
    },
    permissionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "权限ID",
      references: {
        model: 'permissions',
        key: 'id'
      },
      field: 'permission_id'
    }
  }, {
    sequelize,
    tableName: 'role_permissions',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "role_id" },
          { name: "permission_id" },
        ]
      },
      {
        name: "permission_id",
        using: "BTREE",
        fields: [
          { name: "permission_id" },
        ]
      },
    ]
  });
  }
}
