import type { Sequelize } from "sequelize";
import { menus as _menus } from "./menus";
import type { menusAttributes, menusCreationAttributes } from "./menus";
import { operation_logs as _operation_logs } from "./operation_logs";
import type { operation_logsAttributes, operation_logsCreationAttributes } from "./operation_logs";
import { permissions as _permissions } from "./permissions";
import type { permissionsAttributes, permissionsCreationAttributes } from "./permissions";
import { role_permissions as _role_permissions } from "./role_permissions";
import type { role_permissionsAttributes, role_permissionsCreationAttributes } from "./role_permissions";
import { roles as _roles } from "./roles";
import type { rolesAttributes, rolesCreationAttributes } from "./roles";
import { user_roles as _user_roles } from "./user_roles";
import type { user_rolesAttributes, user_rolesCreationAttributes } from "./user_roles";
import { users as _users } from "./users";
import type { usersAttributes, usersCreationAttributes } from "./users";

export {
  _menus as menus,
  _operation_logs as operation_logs,
  _permissions as permissions,
  _role_permissions as role_permissions,
  _roles as roles,
  _user_roles as user_roles,
  _users as users,
};

export type {
  menusAttributes,
  menusCreationAttributes,
  operation_logsAttributes,
  operation_logsCreationAttributes,
  permissionsAttributes,
  permissionsCreationAttributes,
  role_permissionsAttributes,
  role_permissionsCreationAttributes,
  rolesAttributes,
  rolesCreationAttributes,
  user_rolesAttributes,
  user_rolesCreationAttributes,
  usersAttributes,
  usersCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const menus = _menus.initModel(sequelize);
  const operation_logs = _operation_logs.initModel(sequelize);
  const permissions = _permissions.initModel(sequelize);
  const role_permissions = _role_permissions.initModel(sequelize);
  const roles = _roles.initModel(sequelize);
  const user_roles = _user_roles.initModel(sequelize);
  const users = _users.initModel(sequelize);

  permissions.belongsToMany(roles, { as: 'roleIdRoles', through: role_permissions, foreignKey: "permissionId", otherKey: "roleId" });
  roles.belongsToMany(permissions, { as: 'permissionIdPermissions', through: role_permissions, foreignKey: "roleId", otherKey: "permissionId" });
  roles.belongsToMany(users, { as: 'userIdUsers', through: user_roles, foreignKey: "roleId", otherKey: "userId" });
  users.belongsToMany(roles, { as: 'roleIdRolesUserRoles', through: user_roles, foreignKey: "userId", otherKey: "roleId" });
  role_permissions.belongsTo(permissions, { as: "permission", foreignKey: "permissionId"});
  permissions.hasMany(role_permissions, { as: "rolePermissions", foreignKey: "permissionId"});
  role_permissions.belongsTo(roles, { as: "role", foreignKey: "roleId"});
  roles.hasMany(role_permissions, { as: "rolePermissions", foreignKey: "roleId"});
  user_roles.belongsTo(roles, { as: "role", foreignKey: "roleId"});
  roles.hasMany(user_roles, { as: "userRoles", foreignKey: "roleId"});
  operation_logs.belongsTo(users, { as: "user", foreignKey: "userId"});
  users.hasMany(operation_logs, { as: "operationLogs", foreignKey: "userId"});
  user_roles.belongsTo(users, { as: "user", foreignKey: "userId"});
  users.hasMany(user_roles, { as: "userRoles", foreignKey: "userId"});

  return {
    menus: menus,
    operation_logs: operation_logs,
    permissions: permissions,
    role_permissions: role_permissions,
    roles: roles,
    user_roles: user_roles,
    users: users,
  };
}
