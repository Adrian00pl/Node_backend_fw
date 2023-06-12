const Contractors = require("../models/Contractors");

exports.getAllContractors = async (req, res, next) => {
  try {
    const [posts, _] = await Contractors.getAll();

    res.status(200).json( posts );
  } catch (error) {
    next(error);
  }
};

exports.createContractor = async (req, res, next) => {
    try {
      const data = req.body;
  
      await Contractors.create(data);
  
      res.status(200).json({ message: "Contractor created" });
    } catch (error) {
      next(error);
    }
  };

exports.updateContractor = async (req, res, next) => {
    try {
      const contractorId = req.params.id;
      const data = req.body;
  
      await Contractors.update(contractorId, data);
  
      res.status(200).json({ message: "Contractor updated" });
    } catch (error) {
      next(error);
    }
  };

  exports.deleteContractor = async (req, res, next) => {
    try {
      const contractorId = req.params.id;
  
      await Contractors.delete(contractorId);
  
      res.status(200).json({ message: "Contractor deleted" });
    } catch (error) {
      next(error);
    }
  };