const { DataTypes, Model } = require('sequelize');

class Agrupamento extends Model {
  static init(sequelize) {
    super.init(
      {
        titulo: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        ativo: {
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
  static associate(models) {
    this.hasMany(models.Norma, { foreignKey: 'agrupamento_id', as: 'normas' });
  }
}

module.exports = Agrupamento;
