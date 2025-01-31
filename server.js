const express = require('express');
const cors = require('cors');
const bookRouter = require('./routes/bookRouter');

// Import sequelize instance from database
const sequelize = require('./database/sequelize');

// Import PORT
const PORT = 2090;

// Instance of express
const app = express();

// CORS Configuration
app.use(cors({
  origin: "*", // Allow all origins (not recommended for production)
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
}));

// Middleware
app.use(express.json());

// Routes
app.use('/api', bookRouter);

// Timeout middleware
app.use((req, res, next) => {
  res.setTimeout(30000, () => {
    res.status(408).send('Request Timeout');
  });
  next();
});

// Database connection and server start
const server = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

// Invoke the server function to test the database connection
server();

// Start listening to PORT
app.listen(PORT, () => {
  console.log(`App is listening to PORT: ${PORT}`);
});





// const express = require('express');
// const cors = require('cors');
// const bookRouter = require('./routes/bookRouter');

// //import sequelize instance from database
// const sequelize = require('./database/sequelize');

// //import PORT
// const PORT = 2090;

// //instance express
// const app = express();
// // cors configuration
// app.use(cors({origin: "*"}));
// //middleware
// app.use(express.json());

// app.use('/api', bookRouter);

// app.use((req, res, next) => {
//   res.setTimeout(30000, () => {
//     res.status(408).send('Request Timeout');
//   });
//   next();
// });

// const server = async () => {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection to database has been established successfully.');
//       } catch (error) {
//         console.error('Unable to connect to the database:', error);
//       }
// };
// // invoke the server here
// server();
// // listening to PORT
// app.listen(PORT, () => {
//     console.log(`App is listening to PORT: ${PORT}`)
// });