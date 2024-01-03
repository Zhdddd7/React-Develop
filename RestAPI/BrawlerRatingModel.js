
const {getDb, connect} = require('./server');

const BrawlerRating = async (brawlerid, brawlerrating) => {
 connect();
  const db = getDb();
  const mycoll=db.collection('brawlerrating');
  try {
    const data= {brawlerid, brawlerrating};
    const result = await mycoll.insertOne(data);
    return result;
  } catch (err) {
    console.error(err);
  }
};

module.exports = BrawlerRating;