
const calculateBrawlerRankings = async() => {
    const ratingsMap = { 'S': 5, 'A': 4, 'B': 3, 'C': 2, 'D': 1, "": 0 };
  
    const aggregationPipeline = [
      {
        $group: {
          _id: '$brawlerId',
          averageRating: {
            $avg: {
              $switch: {
                branches: [
                  { case: { $eq: ["$rating", "S"] }, then: ratingsMap['S'] },
                  { case: { $eq: ["$rating", "A"] }, then: ratingsMap['A'] },
                  { case: { $eq: ["$rating", "B"] }, then: ratingsMap['B'] },
                  { case: { $eq: ["$rating", "C"] }, then: ratingsMap['C'] },
                  { case: { $eq: ["$rating", "D"] }, then: ratingsMap['D'] },
                  { case: { $eq: ["$rating", ""] }, then: ratingsMap[''] },
                ],
                default: 0
              }
            }
          }
        }
      },
      { $sort: { averageRating: -1 } }
    ];
  
    // Add MongoDB connection and collection logic here
    const { MongoClient, ServerApiVersion } = require('mongodb');
    const uri = "ur_uri";
    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    let db;
    const connect = async(brawlerid, brawlerrating) => {
        const client = new MongoClient(uri, {   
            serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
            }
        });
        try {
            // Connect the client to the server (optional starting in v4.7)
            await client.connect();
            // Send a ping to confirm a successful connection
            await client.db("dev").command({ ping: 1 });
            console.log("Pinged your deployment. You successfully connected to MongoDB!");
            db=client.db("dev");
            const mycoll=db.collection('brawlerrating');
            try{
              const result = await mycoll.aggregate(aggregationPipeline);
            return result;
        } catch (err) {
          console.error(err);
        }
          
          } finally {
            // Ensures that the client will close when you finish/error
            await client.close();
          }
        

    }
   
  }
  module.exports(calculateBrawlerRankings);
