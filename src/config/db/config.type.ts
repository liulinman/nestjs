import { Dialect } from 'sequelize';

export type DBConfig = {
  port: number;
  host: string;
  username: string;
  password: string;
  database: string;
  dialect: Dialect;
  logging: boolean;
  timezone:string;
  dialectOptions?:any
};
