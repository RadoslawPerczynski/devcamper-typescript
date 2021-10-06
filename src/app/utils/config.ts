import { resolve } from 'path';
import { config } from 'dotenv';
config({ path: resolve(__dirname, '../config/.env') });

let path;
switch (process.env.NODE_ENV) {
  case 'tst':
    path = `../config/.env.tst`;
    break;
  case 'prod':
    path = `../config/.env.prod`;
    break;
  default:
    path = `../config/.env`;
}
config({ path: resolve(__dirname, `${path}`) });

export const envVariables = {
  MONGO_URI: process.env.MONGO_URI,
};
