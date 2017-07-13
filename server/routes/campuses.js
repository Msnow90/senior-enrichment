const api = require('express').Router();
const {Campus} = require('../../db/models');

api.get('/', (req, res) => {
  Campus.findAll()
  .then(result => res.json(result))
  .catch(err => errorHandler(err, res))
})

api.post('/', (req, res) => {
  console.log(req.body);
  Campus.create({
    name: req.body.name
  })
  .then(result => res.json(result))
  .catch(err => errorHandler(err, res))
})

api.get('/:campusId', (req, res) => {
  Campus.findOne({
    where: {
      id: req.params.campusId
    }
  })
  .then(result => res.json(result))
  .catch(err => errorHandler(err, res))
})

api.put('/:campusId', (req, res) => {
  Campus.update(req.body, {
    where: {
      id: req.params.campusId
    }
  })
  .then(() => res.sendStatus(200))
  .catch(err => errorHandler(err, res))
})

api.delete('/:campusId', (req, res) => {
  Campus.destroy({
    where: {
      id: req.params.campusId
    }
  })
  .then(() => res.send(req.params.campusId))
  .catch(err => errorHandler(err, res))
})

function errorHandler(error, res) {
  console.log(error);
  res.sendStatus(404);
}

module.exports = api;
