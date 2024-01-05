

const apiKey = "PpFBvww4aCW2iWwa3Q93A7sANrdeVbMiFXtzKdTAM9OU2bz9gIQ2Qutb7Y8foTY1";
var axios = require('axios');

const ratingsMap = { 'S': 5, 'A': 4, 'B': 3, 'C': 2, 'D': 1, '': 0 };

const Ranking = async () => {
    var data = JSON.stringify({
        "collection": "brawlerrating",
        "database": "dev",
        "dataSource": "dogcatcher",
        
        "pipeline": [
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
          ],

        
    });
                
    var config = {
        method: 'post',
        url: 'https://us-east-1.aws.data.mongodb-api.com/app/data-wefzq/endpoint/data/v1/action/aggregate',
        headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': apiKey,
        },
        data: data
    };
                
    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}

module.exports = {Ranking};
