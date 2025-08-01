import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface englishAttributes {
  id: number;
  englishWord?: string;
  englishPhonetic?: string;
  englishType?: string;
  englishChinese?: string;
  englishNote?: string;
  englishLevel?: string;
  englishReference?: string;
  englishCreateTime?: Date;
  englishUpdateTime?: Date;
}

export type englishPk = "id";
export type englishId = english[englishPk];
export type englishOptionalAttributes = "id" | "englishWord" | "englishPhonetic" | "englishType" | "englishChinese" | "englishNote" | "englishLevel" | "englishReference" | "englishCreateTime" | "englishUpdateTime";
export type englishCreationAttributes = Optional<englishAttributes, englishOptionalAttributes>;

export class english extends Model<englishAttributes, englishCreationAttributes> implements englishAttributes {
  id!: number;
  englishWord?: string;
  englishPhonetic?: string;
  englishType?: string;
  englishChinese?: string;
  englishNote?: string;
  englishLevel?: string;
  englishReference?: string;
  englishCreateTime?: Date;
  englishUpdateTime?: Date;


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
      comment: "英语单词",
      field: 'english_word'
    },
    englishPhonetic: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "音标",
      field: 'english_phonetic'
    },
    englishType: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "中文",
      field: 'english_type'
    },
    englishChinese: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "类型",
      field: 'english_chinese'
    },
    englishNote: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "笔记",
      field: 'english_note'
    },
    englishLevel: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'english_level'
    },
    englishReference: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'english_reference'
    },
    englishCreateTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'english_createTime'
    },
    englishUpdateTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'english_updateTime'
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
