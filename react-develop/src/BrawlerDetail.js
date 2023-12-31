import React from 'react';
import { useParams } from 'react-router-dom';
import './App.css';
import { useNavigate } from 'react-router-dom';

const BrawlerDetail = ({ brawlers }) => {
    const { brawlerId } = useParams();
    const brawler = brawlers.find(b => b.id === parseInt(brawlerId));
  
    const navigate = useNavigate();
    return brawler ? (
      <div>
         <button onClick={() => navigate('/')}>Back to Menu</button>
         
        
      </div>
    ) : (
      <div>Brawler not found</div>
    );
  };
  
  export default BrawlerDetail;