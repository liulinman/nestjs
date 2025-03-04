import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface regexAttributes {
  id: number;
  regex_name?: string;
  regex_content?: string;
  regex_describle?: string;
}

export type regexPk = 'id';
export type regexId = regex[regexPk];
export type regexOptionalAttributes =
  | 'id'
  | 'regex_name'
  | 'regex_content'
  | 'regex_describle';
export type regexCreationAttributes = Optional<
  regexAttributes,
  regexOptionalAttributes
>;

export class regex
  extends Model<regexAttributes, regexCreationAttributes>
  implements regexAttributes
{
  id!: number;
  regex_name?: string;
  regex_content?: string;
  regex_describle?: string;

  static initModel(sequelize: Sequelize.Sequelize): typeof regex {
    return regex.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        regex_name: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        regex_content: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        regex_describle: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: 'regex',
        timestamps: false,
        indexes: [
          {
            name: 'PRIMARY',
            unique: true,
            using: 'BTREE',
            fields: [{ name: 'id' }],
          },
        ],
      },
    );
  }
}
