const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://haidongzheng:Zhd123456@dogcatcher.yyr7uwk.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
let db;
const connect = async() => {
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

    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }

  const getDb = () => {
    return db;
  };


  module.exports = { connect, getDb };



