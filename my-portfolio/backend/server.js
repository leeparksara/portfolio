const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001; // You can use any available port

// Middleware to parse JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (optional)
app.use(express.static('public'));

// POST endpoint to handle form submissions
app.post('https://formspree.io/f/xgejbrlq', (req, res) => {
  const formData = req.body;
  // Log the form data (you can replace this with your desired logic)
  console.log(formData);

  // You can send a response to the client if needed
  res.json({ message: 'Form submitted successfully!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
