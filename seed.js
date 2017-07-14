var db = require('./db/index');
var Sequelize = require('sequelize');
var Campus = require('./db/models/index').Campus;
var Student = require('./db/models/index').Student;
var Promise = require('bluebird');

var students = [
  {name: 'Bowlshit', campusId:1, bio: 'Someone who eats bowls of ceral.'},
  {name: 'Horsehair', campusId:1, bio: 'Has very long horse hair and trips over it.'},
  {name: 'Dingus Head', campusId:1, bio: 'Has a funny shaped head.'},
  {name: 'Testmahgangsta', campusId:1, bio: 'Loves taking tests!'},
  {name: 'CantComeUpWithName', campusId:2, bio: 'Can\'t figure out a good names for his/her pets.'},
  {name: 'SeedingIsLame', campusId:2, bio: 'Hates gardening with a passion!'},
  {name: 'John Smith', campusId:2, bio: 'A typical average Joe, except John.'},
  {name: 'Bob Smith', campusId:2, bio: 'A big bob type, who lives in prison.'},
  {name: 'Chris Smith', campusId:3, bio: 'No idea what this person does.'},
  {name: 'Amy Smith', campusId:3, bio: 'Was the name of an old ex gf, because why not?'},
  {name: 'Agent Smith', campusId:3, bio: 'Wasn\'t in the movie: The Matrix!'},
  {name: 'Lamo Smith', campusId:3, bio: 'A lamo with the last name Smith.'},
  {name: 'Seeding Stinks', campusId:4, bio: 'Also hates gardening, best friends with SeedingIsLame'},
  {name: 'Hate Shcool', campusId:4, bio: 'It\'s pronounced shhh cool.'},
  {name: 'Smelly Cat', campusId:4, bio: 'Nobody likes this student!!!'},
  {name: 'Good Dog', campusId:4, bio: 'Everyone loves this student!'}];

var campuses = [
  {name: 'BigHead School', bio: 'This school has a very high academic achievement score. Many people tend to be off balance for some reason too. It\'s a great place to be felt intellectually inferior!'},
  {name: 'Uncoordinated Folks School', bio: 'There tends to be a lot of people bumping into each other. This school has the highest car accident fatalities and deaths on a basketball court per square foot out of the entire world!'},
  {name: 'Small Fingers Academy', bio: 'It\'s a school where no one can grasp a pen or barely type on a keyboard. No one in this academy takes notes sadly.'},
  {name: 'Dismiss Currency Foundation', bio: 'The Foundation pretends to care about humanity, however they charge a huge amount of money and provide very few overworked teachers who are disgruntled due to being paid less than minimum wage.'}
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
  //return Campus.sync({force: true})
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

