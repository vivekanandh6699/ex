// // Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require("dotenv").config()

const routes = require("./routes/authRoutes")
const User = require('./models/User'); // Import the User model
const cors = require('cors'); // Import CORS middleware

const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT | 3070;

app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

//   app.get("/", (req, res) => {
//   res.send("The Brave code");
//   });

// Define route for handling user-related requests
app.use('/api/users', userRoutes);



  // Route to create a new user
app.post('/api/users', async (req, res) => {
    try {
      const { name, email, number } = req.body;
      const newUser = new User({ name, email, number });
      await newUser.save();
      res.status(201).json(newUser); // Send back the newly created user object
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ message: 'Failed to create user' });
    }
  });

  
// // Enable CORS middleware

// Define a route for fetching users
app.get('/api/users', (req, res) => {
  // Assume usersData is an array of user objects
  const usersData = [
    {  name: 'User 1', email: 'user1@example.com', number: '123-456-7890' },
    {  name: 'User 2', email: 'user2@example.com', number: '987-654-3210' }
    // Add more user objects as needed
  ];

// In your Express server
app.get('/debug/users', async (req, res) => {
    try {
        const users = await User.find();
        console.log(users);
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Failed to fetch users' });
    }
});

  
 });

app.use("/api",routes);

// // Start the server
// const PORT = process.env.PORT || 3070; // Choose any available port
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

