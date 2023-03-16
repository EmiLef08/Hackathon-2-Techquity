const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const phoneController = require("./controllers/phoneController")


router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);


router.get("/phones/:brand", phoneController.getPhoneByBrand);
router.get("/phones/:id", phoneController.read);
router.put("/phones/:id", phoneController.updatePhone);
router.post("/phones", phoneController.addPhone);
router.delete("/phones/:id", phoneController.destroy);


module.exports = router;