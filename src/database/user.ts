import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface userAttributes {
  id: number;
  userName?: string;
  userPhone?: string;
  userPassword?: string;
  userProfile?: string;
  userDisabled?: string;
  userGmtCreate?: string;
  userGmtModified?: string;
}

export type userPk = "id";
export type userId = user[userPk];
export type userOptionalAttributes = "id" | "userName" | "userPhone" | "userPassword" | "userProfile" | "userDisabled" | "userGmtCreate" | "userGmtModified";
export type userCreationAttributes = Optional<userAttributes, userOptionalAttributes>;

export class user extends Model<userAttributes, userCreationAttributes> implements userAttributes {
  id!: number;
  userName?: string;
  userPhone?: string;
  userPassword?: string;
  userProfile?: string;
  userDisabled?: string;
  userGmtCreate?: string;
  userGmtModified?: string;


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
    userPhone: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'user_phone'
    },
    userPassword: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'user_password'
    },
    userProfile: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'user_profile'
    },
    userDisabled: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'user_disabled'
    },
    userGmtCreate: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'user_gmtCreate'
    },
    userGmtModified: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'user_gmtModified'
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
