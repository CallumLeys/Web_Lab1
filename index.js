const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Start the server on port 8080
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// 404 error handling
app.use(function(req, res, next) {
  res.status(404).render('views/404.html');
});

/*
// Handling request 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('index/:salary/:days', (req, res) => {
    const salary = req.params.salary;
    const days = req.params.days;

    console.log("Calculating price");
    console.log(salary);
    console.log(days);

    // Get the numbers from the request body
    const salary = req.body.salary;
    const days = req.body.days;
    console.log(salary)
    console.log(days)

    // Calculate the sum
    let finalPrice = 0;
    dailyRate = salary/365;
    finalPrice = Math.round(dailyRate * days/50) * 50;
    priceFormatted = finalPrice.toLocaleString('en-UK');

    // Send the sum back as a response
    res.json({ priceFormatted });
*/