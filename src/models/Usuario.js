const { Model, DataTypes } = require('sequelize');

class Usuario extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        login: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        senha: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        admin: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
      },
      {
        sequelize,
        freezeTableName: true,
      },
    );
  }
}

module.exports = Usuario;
