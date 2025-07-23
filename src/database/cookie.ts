import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface cookieAttributes {
  cookie?: string;
  type: string;
}

export type cookiePk = "type";
export type cookieId = cookie[cookiePk];
export type cookieOptionalAttributes = "cookie";
export type cookieCreationAttributes = Optional<cookieAttributes, cookieOptionalAttributes>;

export class cookie extends Model<cookieAttributes, cookieCreationAttributes> implements cookieAttributes {
  cookie?: string;
  type!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof cookie {
    return cookie.init({
    cookie: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'cookie',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "type" },
        ]
      },
    ]
  });
  }
}
