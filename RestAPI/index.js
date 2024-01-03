const BrawlerRating = require('./BrawlerRatingModel'); // The model file you just created
const {connect} =require('./server')

const express = require('express');
const bodyParser = require('body-parser');  
const app = express();
app.use(bodyParser.json());



app.post('/rate-brawler', async (req, res) => {
    try{
        connect();
        const { brawlerid, brawlerrating } = req.body;
        BrawlerRating(2, 's');
       
    res.status(201).send(`${req.body} is Rating submitted successfully`);
    } catch (error) {
    res.status(500).send('Error submitting rating');
  }

  
  });

  // Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
