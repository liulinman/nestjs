import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface menusAttributes {
  id: number;
  parentId?: number;
  name: string;
  path?: string;
  component?: string;
  icon?: string;
  sort?: number;
  status?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export type menusPk = "id";
export type menusId = menus[menusPk];
export type menusOptionalAttributes = "id" | "parentId" | "path" | "component" | "icon" | "sort" | "status" | "createdAt" | "updatedAt";
export type menusCreationAttributes = Optional<menusAttributes, menusOptionalAttributes>;

export class menus extends Model<menusAttributes, menusCreationAttributes> implements menusAttributes {
  id!: number;
  parentId?: number;
  name!: string;
  path?: string;
  component?: string;
  icon?: string;
  sort?: number;
  status?: number;
  createdAt?: Date;
  updatedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof menus {
    return menus.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    parentId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "父菜单ID",
      field: 'parent_id'
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "菜单名称"
    },
    path: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "路由路径"
    },
    component: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "组件路径"
    },
    icon: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "图标"
    },
    sort: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "排序"
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 1,
      comment: "状态：0-禁用，1-启用"
    }
  }, {
    sequelize,
    tableName: 'menus',
    timestamps: true,
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
