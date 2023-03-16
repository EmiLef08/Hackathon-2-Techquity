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
  const phone = req.body;

  phone.id = parseInt(req.params.id, 10);

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

const getPhone = (req, res) => {
  const phone = req.params.model;

  models.phone
    .getAllPhone(phone)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};


module.exports = {
  getPhone,
  addPhone,
  updatePhone,
  destroy,
  browse,
  read,
  edit
};