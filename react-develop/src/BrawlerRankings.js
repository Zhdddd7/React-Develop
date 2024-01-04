import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const BrawlerRankings = () => {
  const [rankings, setRankings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRankings = async () => {
      const response = await fetch('http://localhost:5000/brawler-rankings');
      const data = await response.json();
      setRankings(data);
    };

    fetchRankings();
  }, []);

  return (
    <div>
      <h1>Brawler Rankings</h1>
      <ul>
        {rankings.map((brawler) => (
          <li key={brawler._id}>
            {brawler.name} - Rating: {brawler.rating}
          </li>
        ))}
      </ul>
      <button className='backtomenu'onClick={() => navigate(-1)}>Back to Menu</button>
    </div>
  );
};

export default BrawlerRankings;
