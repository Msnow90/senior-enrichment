'use strict'
const api = require('express').Router()
const db = require('../db')

const studentRoutes = require('./routes/students');
const campusRoutes = require('./routes/campuses');

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.use((req, res, next) => {
	res.setHeader('Content-Type', 'application/json');
	next();
})

api.get('/hello', (req, res) => res.send({hello: 'world'}))

api.use('/students', studentRoutes);
api.use('/campuses', campusRoutes);

module.exports = api
