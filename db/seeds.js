const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
const Foodbank = require('../models/foodbank');

const foodbankData = [{
  image: 'https://www.westminsterchapel.org.uk/wp-content/uploads/2013/09/Copy-of-Supermarket-Collection-7-1.jpg',
  name: 'Westminster Foodbank',
  location: {
    address: 'Westminster Chapel, Buckingham Gate, London, SW1E 6BS',
    lat: 51.498925,
    lng: -0.138101
  },
  telephone_number: '020 7834 1731',
  website: 'http://www.westminsterchapel.org.uk/ministries/foodbank/',
  email: 'foodbank@westminsterchapel.org.uk'
}, {
  image: 'http://wearewaterloo.co.uk/sites/default/files/styles/large_blog__900x400_/public/waterloo_food_bank_-_19.jpg?itok=JwHO_llL',
  name: 'Waterloo Foodbank',
  location: {
    address: 'Oasis Centre, 1 Kennington Road, London, SE1 7QP',
    lat: 51.4981793,
    lng: -0.11193720000005669
  },
  telephone_number: '020 7921 4205',
  website: 'http://waterloo.foodbank.org.uk',
  email: 'foodbank@oasiswaterloo.org'
}, {
  image: 'http://www.london-se1.co.uk/news/imageuploads/1296918008_80.177.117.97.jpg',
  name: 'St John\'s Waterloo',
  location: {
    address: '66 Waterloo Rd, Lambeth, London SE1 8TY, UK',
    lat: 51.50423821100552,
    lng: -0.11252403259277344
  },
  telephone_number: '020 7921 4205',
  website: 'http://waterloo.foodbank.org.uk',
  email: 'foodbank@oasiswaterloo.org'
}];

mongoose.connect(dbURI, { useMongoClient: true })
  .then(db => db.dropDatabase())
  .then(() => Foodbank.create(foodbankData))
  .then(foodbanks => console.log(`${foodbanks.length} foodbanks created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
