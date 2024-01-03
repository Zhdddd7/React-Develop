
const { getDb } = require('./server');

const BrawlerRating = async (brawlerid, brawlerrating) => {
  const db = getDb();
  const mycoll=db.collection('brawlerrating');
  try {
    const result = await mycoll.insertOne(brawlerid, brawlerrating);
    return result;
  } catch (err) {
    console.error(err);
  }
};

module.exports = BrawlerRating;