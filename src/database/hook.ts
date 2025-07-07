import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface hookAttributes {
  id: number;
  hookName?: string;
  hookParam?: string;
  hookReturnValue?: string;
  hookProfile?: string;
  hookDeprecated?: number;
}

export type hookPk = "id";
export type hookId = hook[hookPk];
export type hookOptionalAttributes = "id" | "hookName" | "hookParam" | "hookReturnValue" | "hookProfile" | "hookDeprecated";
export type hookCreationAttributes = Optional<hookAttributes, hookOptionalAttributes>;

export class hook extends Model<hookAttributes, hookCreationAttributes> implements hookAttributes {
  id!: number;
  hookName?: string;
  hookParam?: string;
  hookReturnValue?: string;
  hookProfile?: string;
  hookDeprecated?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof hook {
    return hook.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    hookName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'hook_name'
    },
    hookParam: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'hook_param'
    },
    hookReturnValue: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'hook_return_value'
    },
    hookProfile: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'hook_profile'
    },
    hookDeprecated: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'hook_deprecated'
    }
  }, {
    sequelize,
    tableName: 'hook',
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
