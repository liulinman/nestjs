import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface chineseNameMapEnglishNameAttributes {
  id: number;
  chineseName?: string;
  englishName?: string;
}

export type chineseNameMapEnglishNamePk = "id";
export type chineseNameMapEnglishNameId = chineseNameMapEnglishName[chineseNameMapEnglishNamePk];
export type chineseNameMapEnglishNameOptionalAttributes = "id" | "chineseName" | "englishName";
export type chineseNameMapEnglishNameCreationAttributes = Optional<chineseNameMapEnglishNameAttributes, chineseNameMapEnglishNameOptionalAttributes>;

export class chineseNameMapEnglishName extends Model<chineseNameMapEnglishNameAttributes, chineseNameMapEnglishNameCreationAttributes> implements chineseNameMapEnglishNameAttributes {
  id!: number;
  chineseName?: string;
  englishName?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof chineseNameMapEnglishName {
    return chineseNameMapEnglishName.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    chineseName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'chinese_name'
    },
    englishName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'english_name'
    }
  }, {
    sequelize,
    tableName: 'chineseNameMapEnglishName',
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
