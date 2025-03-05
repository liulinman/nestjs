import type { Sequelize } from 'sequelize';
import { user as _user } from './user';
import type { userAttributes, userCreationAttributes } from './user';

export { _user as user };

export type { userAttributes, userCreationAttributes };

export function initModels(sequelize: Sequelize) {
  const user = _user.initModel(sequelize);

  return {
    user: user,
  };
}
