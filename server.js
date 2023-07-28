const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
// const session = require('express-session');
const helpers = require('./utils/helpers');

// const sequelize = require('./config/connection');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express(); 
const PORT = process.env.PORT || 3001;

// Set up Hanldebars as the view engine 
const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


// Testing purposes 
// Define the new route
app.get("/home", (req, res) => {
    // Render the home template
    res.render('home'); // Assuming you have a template engine like Handlebars set up
  });

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});