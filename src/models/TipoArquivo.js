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
        freezeTableName: true,
      },
    );
  }
  static associate(models) {
    this.hasMany(models.Arquivo, { foreignKey: 'tipo_id', as: 'arquivos' });
  }
}

module.exports = TipoArquivo;
