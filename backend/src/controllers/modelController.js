const models = require("../models");

const browse = (req, res) => {
  models.model
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

  models.model
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

const getPhoneByModel = (req, res) => {
  const model = req.params.model;

  models.model
    .findByModel(model)
    .then((model) => {
      res.json(model);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};


module.exports = {
  browse,
  read,
  getPhoneByModel,
};