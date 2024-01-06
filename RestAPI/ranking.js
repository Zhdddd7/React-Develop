const api_key = 'change it to your API_KEY';


const Ranking = async() => {
  const ratingsMap = { 'S': 5, 'A': 4, 'B': 3, 'C': 2, 'D': 1, "": 0 };

  var axios = require('axios');
  var data = JSON.stringify({
      "collection": "brawlerrating",
      "database": "dev",
      "dataSource": "dogcatcher",
      "pipeline":[
        {
          $group: {
            _id: '$brawlerid',
            averageRating: {
              $avg: {
                $switch: {
                  branches: [
                    { case: { $eq: ["$brawlerrating", "S"] }, then: ratingsMap['S'] },
                    { case: { $eq: ["$brawlerrating", "A"] }, then: ratingsMap['A'] },
                    { case: { $eq: ["$brawlerrating", "B"] }, then: ratingsMap['B'] },
                    { case: { $eq: ["$brawlerrating", "C"] }, then: ratingsMap['C'] },
                    { case: { $eq: ["$brawlerrating", "D"] }, then: ratingsMap['D'] },
                    { case: { $eq: ["$brawlerrating", ""] }, then: ratingsMap[''] },
                  ],
                  default: 0
                }
              }
            }
          }
        },
        { $sort: { averageRating: -1 } }
      ]

  });
            
  var config = {
      method: 'post',
      //this api is open for data pipeline, u can choose different api by your needs
      url: 'https://us-east-1.aws.data.mongodb-api.com/app/data-wefzq/endpoint/data/v1/action/aggregate',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': api_key,
      },
      data: data
  };

  try{
    const response=await axios(config);
     
    return (response.data.documents);
  }catch(error){
    throw error;
  }
  

  };

module.exports = {Ranking};