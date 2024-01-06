
const {connect} =require('./server');
const {Ranking} = require('./Ranking');

const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');  
const app = express();
app.use(bodyParser.json());
//By default, cors() enables CORS for all origins. 
// If you want to restrict it to your frontend application only, you can configure it as follows:
app.use(cors({ origin: 'http://localhost:3000' }));


app.post('/rate-brawler', async (req, res) => {
    try{
        console.log(req.body);
        const {brawlerid, brawlerrating} =  req.body;
        connect(brawlerid, brawlerrating);
       
    res.status(201).send(`Rating submitted successfully`);
    } catch (error) {
    res.status(500).send('Error submitting rating');
  }
 });

 

 app.get('/brawler-rankings', async (req, res) => {
  try {
    const rankingData = await Ranking(); 
    res.json(rankingData);
  } catch (error) {
    res.status(500).send('error occur');
  }
});

  // Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
