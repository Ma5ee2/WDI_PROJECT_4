const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
const Foodbank = require('../models/foodbank');
const User = require('../models/user');

const userData = [
  {
    avatar: 'http://www.fillmurray.com/300/300',
    username: 'Fill',
    email: 'fill@murray.com',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    avatar: 'http://www.fillmurray.com/300/300',
    username: 'Rane',
    email: 'rane@ga.com',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    avatar: 'http://www.fillmurray.com/300/300',
    username: 'Masee',
    email: 'masee@drunk.com',
    password: 'password',
    passwordConfirmation: 'password'
  }
];

mongoose
  .connect(dbURI, { useMongoClient: true })
  .then(db => db.dropDatabase())
  .then(() => User.create(userData))
  .then(users => {
    return Foodbank.create([
      {
        image: 'https://www.westminsterchapel.org.uk/wp-content/uploads/2013/09/Copy-of-Supermarket-Collection-7-1.jpg',
        name: 'Westminster Foodbank',
        location: {
          lat: 51.498925,
          lng: -0.138101
        },
        address: 'Westminster Chapel, Buckingham Gate, London, SW1E 6BS',
        telephone_number: '020 7834 1731',
        website: 'http://www.westminsterchapel.org.uk/ministries/foodbank/',
        email: 'foodbank@westminsterchapel.org.uk',
        admin: users[2]
      },
      {
        image: 'http://wearewaterloo.co.uk/sites/default/files/styles/large_blog__900x400_/public/waterloo_food_bank_-_19.jpg?itok=JwHO_llL',
        name: 'Waterloo Foodbank',
        location: {
          lat: 51.4981793,
          lng: -0.11193720000005669
        },
        address: 'Oasis Centre, 1 Kennington Road, London, SE1 7QP',
        telephone_number: '020 7921 4205',
        website: 'http://waterloo.foodbank.org.uk',
        email: 'foodbank@oasiswaterloo.org',
        admin: users[2]
      },
      {
        image: 'http://www.london-se1.co.uk/whatson/imageuploads/1506608294_46.208.31.3.jpg',
        name: 'St John\'s Waterloo',
        location: {
          lat: 51.50423821100552,
          lng: -0.11252403259277344
        },
        address: '66 Waterloo Rd, Lambeth, London SE1 8TY, UK',
        telephone_number: '020 7921 4205',
        website: 'http://waterloo.foodbank.org.uk',
        email: 'foodbank@oasiswaterloo.org',
        admin: users[1]
      }
    ])
  })
  .then(foodbanks => console.log(`${foodbanks.length} foodbanks created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
