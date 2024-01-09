module.exports = (sequelize, DataTypes) => {
  const Loanrequest = sequelize.define("loanrequest", {
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    loanamount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    term: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    statuss: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  Loanrequest.belongsTo(sequelize.models.user, {
    foreignKey: "userid",
    onDelete: "CASCADE", // Delete loan requests when associated user is deleted
  });
  return Loanrequest;
};
