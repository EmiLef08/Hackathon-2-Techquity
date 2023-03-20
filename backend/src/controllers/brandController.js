const models = require("../models");

const browse = (req, res) => {
  models.brand
    .findAll()
    .then(([rows]) => { console.log(rows);
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  const id = parseInt(req.params.id, 10);

  models.brand
    .find(id)
    .then(([result]) => {
      if (result.length) {
        res.json(result[0]);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getPhoneByBrand = (req, res) => {
  const brand = req.params.brand;

  models.brand
    .findByBrand(brand)
    .then((brand) => {
      res.json(brand);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};


module.exports = {
  browse,
  read,
  getPhoneByBrand,
};