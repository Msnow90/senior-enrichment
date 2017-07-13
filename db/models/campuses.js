const Sequelize = require('sequelize');
const db = require('../index');

const imgUrls = [
  'http://thecrite.com/home/wp-content/uploads/2012/09/0925RecycleCB-007-430x286.jpg',
  'http://www.wsusignpost.com/wp-content/uploads/2014/02/201402272-27-Trash-Jake-2.jpg',
  'http://is1.mzstatic.com/image/thumb/Music4/v4/37/3e/a7/373ea715-8cab-6f4c-94ac-3f21a5aa721d/source/600x600bb.jpg',
  'https://i.ytimg.com/vi/cDePNEGQSJY/maxresdefault.jpg'
];

function randUrl() {
  return imgUrls[Math.floor(Math.random() * 4)];
}

module.exports = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imgUrl: {
    type: Sequelize.STRING
  }
}, {
  hooks: {
    beforeCreate(campus) {
      campus.imgUrl = randUrl();
      //campus.set('imgUrl', randUrl());
    }
  }
})
