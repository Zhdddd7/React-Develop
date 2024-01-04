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
        const data= {brawlerid, brawlerrating};
        
        const result = await mycoll.insertOne(data);
      return result;
  } catch (err) {
    console.error(err);
  }


    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  };

  


  module.exports = { connect };



