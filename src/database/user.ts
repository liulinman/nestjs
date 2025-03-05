import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface userAttributes {
  id: number;
  user_name?: string;
  user_phone?: string;
  user_password?: string;
  user_profile?: string;
  user_disabled?: string;
  user_gmtCreate?: string;
  user_gmtModified?: string;
}

export type userPk = "id";
export type userId = user[userPk];
export type userOptionalAttributes = "id" | "user_name" | "user_phone" | "user_password" | "user_profile" | "user_disabled" | "user_gmtCreate" | "user_gmtModified";
export type userCreationAttributes = Optional<userAttributes, userOptionalAttributes>;

export class user extends Model<userAttributes, userCreationAttributes> implements userAttributes {
  id!: number;
  user_name?: string;
  user_phone?: string;
  user_password?: string;
  user_profile?: string;
  user_disabled?: string;
  user_gmtCreate?: string;
  user_gmtModified?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof user {
    return user.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_phone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_profile: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_disabled: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_gmtCreate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_gmtModified: {
      type: DataTypes.STRING(255),
      allowNull: true
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
