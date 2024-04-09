//index.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRouter = require('./routes/authRoutes');
const app= express();
const path = require('path');

// middle
app.use(cors());
app.use(express.json());

// // Serve static files from the React app
// app.use(express.static(path.join(__dirname, 'client/build')));


// route 
app.use('/', authRouter);

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

 
  
// mongodb connection
mongoose
      .connect('mongodb://127.0.0.1:27017/authemtication')
      .then(() => console.log('connected to MongoDB!'))
      .catch((error) => console.error('Failed to connect to MongoDB:',error));



//server
const PORT = 3070;
app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);});