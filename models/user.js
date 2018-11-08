import { Model } from 'sequelize';

export default class User extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: { type: DataTypes.INTEGER, primaryKey: true },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: { isEmail: true },
          unique: {
            args: true,
            msg: 'email aready in use',
          },
        },
        nickname: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: { args: true, msg: 'nickname already exists' },
        },
      },
      { sequelize },
    );
  }
}
