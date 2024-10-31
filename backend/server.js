// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000; // Specify your Express server port

// Enable CORS for requests from your frontend URL
app.use(cors({
  origin: ['http://localhost:5173'], // Allow requests from your frontend port
  methods: ['GET', 'POST'], // Allow specific methods
}));
app.use(bodyParser.json()); // Middleware to parse JSON bodies

// Dummy user data for demonstration
const users = {
  'admin': 'password123', 
};

// Simple GET request for testing
app.get('/', (req, res) => {
  res.send('Welcome to the API!'); 
});

// Login endpoint
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  if (users[username] && users[username] === password) {
    return res.status(200).json({ message: 'Login successful!' });
  }
  return res.status(401).json({ message: 'Invalid username or password' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
