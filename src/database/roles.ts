import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { permissions, permissionsId } from './permissions';
import type { role_permissions, role_permissionsId } from './role_permissions';
import type { user_roles, user_rolesId } from './user_roles';
import type { users, usersId } from './users';

export interface rolesAttributes {
  id: number;
  name: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type rolesPk = "id";
export type rolesId = roles[rolesPk];
export type rolesOptionalAttributes = "id" | "description" | "createdAt" | "updatedAt";
export type rolesCreationAttributes = Optional<rolesAttributes, rolesOptionalAttributes>;

export class roles extends Model<rolesAttributes, rolesCreationAttributes> implements rolesAttributes {
  id!: number;
  name!: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;

  // roles belongsToMany permissions via roleId and permissionId
  permissionIdPermissions!: permissions[];
  getPermissionIdPermissions!: Sequelize.BelongsToManyGetAssociationsMixin<permissions>;
  setPermissionIdPermissions!: Sequelize.BelongsToManySetAssociationsMixin<permissions, permissionsId>;
  addPermissionIdPermission!: Sequelize.BelongsToManyAddAssociationMixin<permissions, permissionsId>;
  addPermissionIdPermissions!: Sequelize.BelongsToManyAddAssociationsMixin<permissions, permissionsId>;
  createPermissionIdPermission!: Sequelize.BelongsToManyCreateAssociationMixin<permissions>;
  removePermissionIdPermission!: Sequelize.BelongsToManyRemoveAssociationMixin<permissions, permissionsId>;
  removePermissionIdPermissions!: Sequelize.BelongsToManyRemoveAssociationsMixin<permissions, permissionsId>;
  hasPermissionIdPermission!: Sequelize.BelongsToManyHasAssociationMixin<permissions, permissionsId>;
  hasPermissionIdPermissions!: Sequelize.BelongsToManyHasAssociationsMixin<permissions, permissionsId>;
  countPermissionIdPermissions!: Sequelize.BelongsToManyCountAssociationsMixin;
  // roles hasMany role_permissions via roleId
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
  // roles hasMany user_roles via roleId
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
  // roles belongsToMany users via roleId and userId
  userIdUsers!: users[];
  getUserIdUsers!: Sequelize.BelongsToManyGetAssociationsMixin<users>;
  setUserIdUsers!: Sequelize.BelongsToManySetAssociationsMixin<users, usersId>;
  addUserIdUser!: Sequelize.BelongsToManyAddAssociationMixin<users, usersId>;
  addUserIdUsers!: Sequelize.BelongsToManyAddAssociationsMixin<users, usersId>;
  createUserIdUser!: Sequelize.BelongsToManyCreateAssociationMixin<users>;
  removeUserIdUser!: Sequelize.BelongsToManyRemoveAssociationMixin<users, usersId>;
  removeUserIdUsers!: Sequelize.BelongsToManyRemoveAssociationsMixin<users, usersId>;
  hasUserIdUser!: Sequelize.BelongsToManyHasAssociationMixin<users, usersId>;
  hasUserIdUsers!: Sequelize.BelongsToManyHasAssociationsMixin<users, usersId>;
  countUserIdUsers!: Sequelize.BelongsToManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof roles {
    return roles.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "角色名称",
      unique: "name"
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "角色描述"
    }
  }, {
    sequelize,
    tableName: 'roles',
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
    ]
  });
  }
}
