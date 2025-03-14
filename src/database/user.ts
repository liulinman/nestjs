import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface userAttributes {
  id: number;
  userName?: string;
  userPassword?: string;
  userPhone?: string;
  userAge?: string;
  userSex?: string;
}

export type userPk = "id";
export type userId = user[userPk];
export type userOptionalAttributes = "id" | "userName" | "userPassword" | "userPhone" | "userAge" | "userSex";
export type userCreationAttributes = Optional<userAttributes, userOptionalAttributes>;

export class user extends Model<userAttributes, userCreationAttributes> implements userAttributes {
  id!: number;
  userName?: string;
  userPassword?: string;
  userPhone?: string;
  userAge?: string;
  userSex?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof user {
    return user.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    userName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'user_name'
    },
    userPassword: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'user_password'
    },
    userPhone: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'user_phone'
    },
    userAge: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'user_age'
    },
    userSex: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'user_sex'
    }
  }, {
    sequelize,
    tableName: 'user',
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
