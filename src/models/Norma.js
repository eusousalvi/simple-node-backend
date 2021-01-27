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
        agrupamento_id: {
          type: DataTypes.INTEGER,
          references: {
            model: {
              tableName: 'agrupamento',
            },
            key: 'id',
          },
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
        arquivo: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: {
              tableName: 'arquivo',
            },
            key: 'id',
          },
        },
      },
      {
        sequelize,
        modelName: 'norma',
        freezeTableName: true,
      },
    );
  }
}

module.exports = Norma;
