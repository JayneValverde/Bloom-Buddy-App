const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const session = require('express-session');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express(); 
const PORT = process.env.PORT || 3001;

// Set up Hanldebars as the view engine 
const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Testing purposes 
// Define the new route
// app.get("/", (req, res) => {

//     // Render the home template
//     res.render('./layouts/main'); // Assuming you have a template engine like Handlebars set up
//   });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`); 
    sequelize.sync({ force: false });
});