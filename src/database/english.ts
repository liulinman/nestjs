import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface englishAttributes {
  id: number;
  englishWord?: string;
  englishIpa?: string;
  englishChinese?: string;
  englishDec?: string;
}

export type englishPk = "id";
export type englishId = english[englishPk];
export type englishOptionalAttributes =
  | "id"
  | "englishWord"
  | "englishIpa"
  | "englishChinese"
  | "englishDec";
export type englishCreationAttributes = Optional<englishAttributes, englishOptionalAttributes>;

export class english extends Model<englishAttributes, englishCreationAttributes> implements englishAttributes {
  id!: number;
  englishWord?: string;
  englishIpa?: string;
  englishChinese?: string;
  englishDec?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof english {
    return english.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    englishWord: {
      type: DataTypes.STRING(255),
      allowNull: true,
          field: 'english_word',
    },
    englishIpa: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'english_ipa'
    },
    englishChinese: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'english_chinese'
    },
    englishDec: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'english_dec'
    }
  }, {
    sequelize,
    tableName: 'english',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
