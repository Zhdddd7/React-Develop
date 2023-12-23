import React from 'react';
import { useNavigate } from 'react-router-dom';

import './App.css';
import Brawlers from './Brawlers';
    
   
    
    function Home(){
        const brawler0 = {
            "Name": "Shelly",
            "Rarity": "Basic",
            "Movement": 770,
            "HP": 7400,
            "Attack" : 600,
            "Pic": 'https://media.brawltime.ninja/brawlers/shelly/model.webp?size=100'}
        const navigate= useNavigate();
    return (
        <div>
            <h1>BrawlStar</h1>

            <div className='container' onClick={() => navigate('/Detail')}>
           
                <Brawlers brawler0={brawler0}/>
           
            </div>
        </div>
        
    );
}

export default Home;