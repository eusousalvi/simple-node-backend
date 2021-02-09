const { DataTypes, Model } = require('sequelize');

class Norma extends Model {
  static init(sequelize) {
    super.init(
      {
        nr_norma: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        titulo: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        descricao: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        tag: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        ultima_versao: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        versao: {
          type: DataTypes.STRING(10),
          allowNull: false,
        },
        depreciado: {
          type: DataTypes.STRING(255),
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
    this.hasOne(models.Arquivo, { foreignKey: 'norma_id', as: 'arquivo' });
    this.belongsTo(models.Agrupamento, { foreignKey: 'agrupamento_id', as: 'agrupamento' });
    this.hasMany(models.Norma, {
      foreignKey: 'nr_norma',
      sourceKey: 'nr_norma',
      useJunctionTable: false,
      as: 'versoes',
    });
  }
}

module.exports = Norma;
