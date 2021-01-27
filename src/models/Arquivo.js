const { DataTypes, Model } = require('sequelize');

class Arquivo extends Model {
  static init(sequelize) {
    super.init(
      {
        tipo: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: {
              tableName: 'tipo_arquivo',
            },
            key: 'id',
          },
        },
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
        modelName: 'arquivo',
        freezeTableName: true,
      },
    );
  }
}

module.exports = Arquivo;
