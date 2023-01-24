const express = require('express');
const app = express();
const port = 8080;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Start the server on port 8080
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
