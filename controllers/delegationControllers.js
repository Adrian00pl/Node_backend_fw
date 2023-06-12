const Delegations = require("../models/Delegations");

exports.getAllDelegations = async (req, res, next) => {
  try {
    const [posts, _] = await Delegations.getAll();

    res.status(200).json( posts );
  } catch (error) {
    next(error);
  }
};

  