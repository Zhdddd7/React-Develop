import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BrawlerList from './BrawlerList';

const BrawlerRankings = () => {
  const [rankings, setRankings] = useState([]);
  const navigate = useNavigate();
  useEffect(() =>{
    //this api may be different according to ur server type, PORT, and API name...
    fetch('http://localhost:5000/brawler-rankings')
      .then((response) => response.json())
      .then((data) =>{
        const mergedData = data.map((rank) => {
          const brawler = BrawlerList.find((b) => b.id === rank._id);
          return {
            Name: brawler ? brawler.Name : 'Unknown',
            averageRating: rank.averageRating,
          };
        });
      setRankings(mergedData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setRankings('Failed to fetch data.');
      });
  }, []);
  
  
  return (
    <div>
      <h1>Brawler Rankings</h1>
      <table className='rankingtable'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Average Rating</th>
          </tr>
        </thead>
        <tbody>
          {rankings.map((brawler, index) => (
            <tr key={index}>
              <td>{brawler.Name}</td>
              <td>{brawler.averageRating.toFixed(2)}</td> {/* toFixed(2) for two decimal places */}
            </tr>
          ))}
        </tbody>
      </table>
      <button className='backtomenu'onClick={() => navigate(-1)}>Back to Menu</button>
    </div>
  );
};

export default BrawlerRankings;
