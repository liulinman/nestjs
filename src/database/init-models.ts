import type { Sequelize } from 'sequelize';
import { regex as _regex } from './regex';
import type { regexAttributes, regexCreationAttributes } from './regex';

export { _regex as regex };

export type { regexAttributes, regexCreationAttributes };

export function initModels(sequelize: Sequelize) {
  const regex = _regex.initModel(sequelize);

  return {
    regex: regex,
  };
}
