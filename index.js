const mongoose = require('mongoose');
const Recipe = require('./models/Recipe'); // Import of the model Recipe from './models/Recipe'
const data = require('./data.js');  // Import of the data from './data.js'

// Connection to the database "recipeApp"
mongoose.connect('mongodb://localhost/recipeApp', { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

let albondigas = {
  title: 'Albondigas',
  cuisine: 'Spanish',
  level: 'Amateur Chef',
  ingredients: ['minced beef', 'petruska', 'onion', 'carrot', 'flour', 'egg', 'milk', 'bread', 'white wine', 'tomato sauce', 'garlic'],
  dishType: 'Dish',
  image: 'https://vod-hogarmania.atresmedia.com/hogarmania/images/images01/2013/06/14/5bf566dc23430100010f45fe/1239x697.jpg',
  duration: 110,
  creator: 'Karlos Arguiñano',
  created: '1998-05-24'
};

Recipe.create(albondigas)
  .then(() => {
    console.log(albondigas.title);
    Recipe.insertMany(data)
    .then(result => {
      result.forEach((recipe) => {
        console.log(recipe.title);
        Recipe.findOneAndUpdate({title: "Rigatoni alla Genovese"}, {duration: 100})
      })
    })
  })
  
