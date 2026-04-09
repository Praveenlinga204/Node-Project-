const express = require("express")
const router = express.Router();
const {getContact,createContact,updateContact,deleteContact,getOneContact} = require("../controller/contactCont")

router.route("/").get(getContact).post(createContact);

router.route("/:id").get(getOneContact).put(updateContact).delete(deleteContact);

module.exports = router;