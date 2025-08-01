import type { Sequelize } from "sequelize";
import { cookie as _cookie } from "./cookie";
import type { cookieAttributes, cookieCreationAttributes } from "./cookie";
import { english as _english } from "./english";
import type { englishAttributes, englishCreationAttributes } from "./english";

export {
  _cookie as cookie,
  _english as english,
};

export type {
  cookieAttributes,
  cookieCreationAttributes,
  englishAttributes,
  englishCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const cookie = _cookie.initModel(sequelize);
  const english = _english.initModel(sequelize);


  return {
    cookie: cookie,
    english: english,
  };
}
