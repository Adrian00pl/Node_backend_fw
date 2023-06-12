const express = require("express");
const delegationControllers = require("../controllers/delegationControllers");
const contractorControllers = require("../controllers/contractorControllers");
const router = express.Router();

// @route GET && POST - /posts/
router.route("/delegations/getAll").get(delegationControllers.getAllDelegations);
router.route("/contractors/getAll").get(contractorControllers.getAllContractors);

router.route("/contractors/add").post(contractorControllers.createContractor);
router.route("/contractors/update/:id").put(contractorControllers.updateContractor);
router.route("/contractors/delete/:id").delete(contractorControllers.deleteContractor);
module.exports = router;