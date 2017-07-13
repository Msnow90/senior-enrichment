var db = require('./db/index');
var Sequelize = require('sequelize');
var Campus = require('./db/models/index').Campus;
var Student = require('./db/models/index').Student;
var Promise = require('bluebird');

var students = [
  {name: 'Bowlshit', campusId:1},
  {name: 'Horsehair', campusId:1},
  {name: 'Dingus Head', campusId:1},
  {name: 'Testmahgangsta', campusId:1},
  {name: 'CantComeUpWithName', campusId:2},
  {name: 'SeedingIsLame', campusId:2},
  {name: 'John Smith', campusId:2},
  {name: 'Bob Smith', campusId:2},
  {name: 'Chris Smith', campusId:3},
  {name: 'Amy Smith', campusId:3},
  {name: 'Agent Smith', campusId:3},
  {name: 'Lamo Smith', campusId:3},
  {name: 'Seeding Stinks', campusId:4},
  {name: 'Hate Shcool', campusId:4},
  {name: 'Smelly Cat', campusId:4},
  {name: 'Good Dog', campusId:4}];

var campuses = [
  {name: 'BigHead School'},
  {name: 'Uncoordinated Folks School'},
  {name: 'Small Fingers Academy'},
  {name: 'Dismiss Currency Foundation'}
]

const seed = () => {
  Promise.all(campuses.map(campus =>
    Campus.create(campus))
  )
  .then(() => {
    Promise.all(students.map(student =>
    Student.create(student)))
  })
}

//var builtUsers = users.map(user => User.save(user))

db.sync({force: true})
.then(() => {
  return Campus.sync({force: true})
})
.then(() => {
  //return Student.sync({force: true})
})
.then(() => {
  return Promise.map(campuses, (campus) => {
    return Campus.create(campus);
  })
})
.then(() => {
  return Promise.map(students, (student) => {
    return Student.create(student);
  })
})
.then(() => {
  console.log('Seeding complete!');
})
.catch(err => {
  console.log('There was an error: ', err);
})
.finally(() => {
  db.close();
  console.log('DB now closed!');
  return null;
})

