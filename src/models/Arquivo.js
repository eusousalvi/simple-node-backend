const { DataTypes, Model } = require('sequelize');

class Arquivo extends Model {
  static init(sequelize) {
    super.init(
      {
        original_name: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        hash_name: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        thumbnail: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        link: {
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
    this.belongsTo(models.TipoArquivo, { foreignKey: 'tipo_id', as: 'tipo' });
    this.belongsTo(models.Norma, { foreignKey: 'norma_id', as: 'norma' });
  }
}

module.exports = Arquivo;
