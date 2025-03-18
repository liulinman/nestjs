import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { role_permissions, role_permissionsId } from './role_permissions';
import type { roles, rolesId } from './roles';

export interface permissionsAttributes {
  id: number;
  name: string;
  code: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type permissionsPk = "id";
export type permissionsId = permissions[permissionsPk];
export type permissionsOptionalAttributes = "id" | "description" | "createdAt" | "updatedAt";
export type permissionsCreationAttributes = Optional<permissionsAttributes, permissionsOptionalAttributes>;

export class permissions extends Model<permissionsAttributes, permissionsCreationAttributes> implements permissionsAttributes {
  id!: number;
  name!: string;
  code!: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;

  // permissions hasMany role_permissions via permissionId
  rolePermissions!: role_permissions[];
  getRolePermissions!: Sequelize.HasManyGetAssociationsMixin<role_permissions>;
  setRolePermissions!: Sequelize.HasManySetAssociationsMixin<role_permissions, role_permissionsId>;
  addRolePermission!: Sequelize.HasManyAddAssociationMixin<role_permissions, role_permissionsId>;
  addRolePermissions!: Sequelize.HasManyAddAssociationsMixin<role_permissions, role_permissionsId>;
  createRolePermission!: Sequelize.HasManyCreateAssociationMixin<role_permissions>;
  removeRolePermission!: Sequelize.HasManyRemoveAssociationMixin<role_permissions, role_permissionsId>;
  removeRolePermissions!: Sequelize.HasManyRemoveAssociationsMixin<role_permissions, role_permissionsId>;
  hasRolePermission!: Sequelize.HasManyHasAssociationMixin<role_permissions, role_permissionsId>;
  hasRolePermissions!: Sequelize.HasManyHasAssociationsMixin<role_permissions, role_permissionsId>;
  countRolePermissions!: Sequelize.HasManyCountAssociationsMixin;
  // permissions belongsToMany roles via permissionId and roleId
  roleIdRoles!: roles[];
  getRoleIdRoles!: Sequelize.BelongsToManyGetAssociationsMixin<roles>;
  setRoleIdRoles!: Sequelize.BelongsToManySetAssociationsMixin<roles, rolesId>;
  addRoleIdRole!: Sequelize.BelongsToManyAddAssociationMixin<roles, rolesId>;
  addRoleIdRoles!: Sequelize.BelongsToManyAddAssociationsMixin<roles, rolesId>;
  createRoleIdRole!: Sequelize.BelongsToManyCreateAssociationMixin<roles>;
  removeRoleIdRole!: Sequelize.BelongsToManyRemoveAssociationMixin<roles, rolesId>;
  removeRoleIdRoles!: Sequelize.BelongsToManyRemoveAssociationsMixin<roles, rolesId>;
  hasRoleIdRole!: Sequelize.BelongsToManyHasAssociationMixin<roles, rolesId>;
  hasRoleIdRoles!: Sequelize.BelongsToManyHasAssociationsMixin<roles, rolesId>;
  countRoleIdRoles!: Sequelize.BelongsToManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof permissions {
    return permissions.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "权限名称",
      unique: "name"
    },
    code: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "权限编码",
      unique: "code"
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "权限描述"
    }
  }, {
    sequelize,
    tableName: 'permissions',
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
        name: "name",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "code",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
