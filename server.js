const express = require('express');


//import sequelize instance from database
const sequelize = require('./database/sequelize');

const bookRouter = require('./routes/bookRouter');
//import PORT
const PORT = 2090;

//instance express
const app = express();
//middleware
app.use(express.json());

app.use(bookRouter);

const server = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to database has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
};
// invoke the server here
server();
// listening to PORT
app.listen(PORT, () => {
    console.log(`App is listening to PORT: ${PORT}`)
});