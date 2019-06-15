export default function(sequelize, DataTypes) {
  const Gas = sequelize.define(
    'Gas',
    {
      type: {
        type: DataTypes.STRING(200)
      },
      milliliters: {
        type: DataTypes.INTEGER
      }
    },
    {
      tableName: 'gas',
      underscored: true,
      paranoid: process.env.NODE_ENV === 'production'
    }
  );
  return Gas;
}
