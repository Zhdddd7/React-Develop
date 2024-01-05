import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const BrawlerRankings = () => {
  const [rankings, setRankings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRankings = async () => {
      try {
        const response = await fetch('http://192.168.1.177:5000/brawler-rankings', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          
        });
    
        if (response.ok) {
          console.log('Rating submitted successfully');
          const data = await response.json();
          setRankings(data);

        } else {
          console.error('Failed to submit rating');
        }
      } catch (error) {
        console.error('Error submitting rating', error);
      }

      // const response = await fetch('http://localhost:5000/brawler-rankings');
     
    };

    fetchRankings();
  }, []);

  return (
    <div>
      <h1>Brawler Rankings</h1>
      <ul>
      {rankings.map((brawler) => (
          <li key={brawler._id}>
            {brawler._id} - Rating: {brawler.averageRating}
          </li>
        ))}
      </ul>
      <button className='backtomenu'onClick={() => navigate(-1)}>Back to Menu</button>
    </div>
  );
};

export default BrawlerRankings;
