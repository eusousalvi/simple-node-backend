'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('arquivo', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      tipo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'tipo_arquivo',
          },
          key: 'id',
        },
      },
      original_name: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      hash_name: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      thumbnail: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      link: {
        type: Sequelize.STRING(255),
        allowNull: false,
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
    await queryInterface.dropTable('arquivo');
  },
};
