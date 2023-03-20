const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const phoneController = require("./controllers/phoneController");
//const brandController = require("./controllers/brandController");
// const modelController = require("./controllers/modelController");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);



//router.get("/phones", phoneController.browse);
//router.get("/phones/:brand", brandController.getPhoneByBrand);
router.get("/phones/:model", phoneController.getPhone);
//router.get("/phones/:id", phoneController.read);
//router.put("/phones/:id", phoneController.updatePhone);
//router.post("/phones", phoneController.addPhone);
//router.delete("/phones/:id", phoneController.destroy);

module.exports = router;