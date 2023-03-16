const models = require("../models");

const browse = (req, res) => {
  models.phone
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const read = (req, res) => {
  const id = parseInt(req.params.id, 10);

  models.phone
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
const edit = (req, res) => {
  const dream = req.body;

  dream.id = parseInt(req.params.id, 10);

  models.phone
    .update(phone)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.phone
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};


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
  getPhoneByBrand,
  destroy,
  browse,
  read,
  edit
};