'use strict';
const api = require('express').Router();
const {Student} = require('../../db/models');

api.get('/', (req, res) => {
  Student.findAll()
  .then(result => res.json(result))
  .catch(err => errorHandler(err, res))
})

api.post('/', (req, res) => {
  console.log('test')
  console.log(req.body);
  Student.create(req.body)
  .then(result => res.json(result))
  .catch(err => errorHandler(err, res))
})

api.get('/:studentId', (req, res) => {
  Student.findOne({
    where: {
      id: req.params.studentId
    }
  })
  .then(result => res.json(result))
  .catch(err => errorHandler(err, res))
})

api.put('/:studentId', (req, res) => {
  Student.update(req.body, {
    where: {
      id: req.params.studentId
    }
  })
  .then(() => res.sendStatus(200))
  .catch(err => errorHandler(err, res))
})

api.delete('/:studentId', (req, res) => {
  console.log('what the fuck?!?!?', req.params.studentId);
  Student.destroy({
    where: {
      id: req.params.studentId
    }
  })
  .then(() => res.send(req.params.studentId))
  .catch(err => errorHandler(err, res))
})

function errorHandler(error, res) {
  console.log(error);
  res.sendStatus(404);
}

module.exports = api;
