const models = require("../models");

const addPhone = (req, res) => {
  const phone = req.body;

  models.phone
    .insert(phone)
    .then(([result]) => {
      res.location(`/phone/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const updatePhone = (req, res) => {
  const phone = req.body;

  models.phone

    .update(phone)
    .then(([result]) => {
      res.location(`/phone/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getPhoneByBrand = (req, res, next) => {
  models.brand
    .findByBrand(req.body)
    .then(([brand]) => {
      if (brand[0] != null) {
        [req.brand] = brand;
        res.location(`/brand/${user.insertId}`).sendStatus(201);
        next();
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};


module.exports = {
  addPhone,
  updatePhone,
  getPhoneByBrand
};