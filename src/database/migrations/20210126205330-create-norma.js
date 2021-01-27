'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('norma', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nr_norma: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      titulo: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      descricao: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      tag: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      agrupamento_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'agrupamento',
          },
          key: 'id',
        },
        allowNull: false,
      },
      ultima_versao: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      versao: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      depreciado: {
        type: Sequelize.STRING(255),
      },
      ativo: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      arquivo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'arquivo',
          },
          key: 'id',
        },
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('norma');
  },
};
