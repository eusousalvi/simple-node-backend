const { Model, DataTypes } = require('sequelize');

class TipoArquivo extends Model {
  static init(sequelize) {
    super.init(
      {
        mime: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'tipo_arquivo',
        freezeTableName: true,
      },
    );
  }
}

module.exports = TipoArquivo;
