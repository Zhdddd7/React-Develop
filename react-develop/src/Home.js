import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './App.css';
import Brawlers from './Brawlers';
import { BrawlerList } from './BrawlerData';
   
    
    function Home(){
        
        const navigate= useNavigate();
    return (
        <div>
            <h1>BrawlStar</h1>

            {BrawlerList?.length > 0
                ?(
            <div className='container' onClick={() => navigate('/Detail')}>
           
                {BrawlerList.map((brawler) => (
                < Brawlers brawler ={brawler}/>
                ))}
            
            </div>): 
            <div className='empty'>
                <h2>No brawlers available</h2>
                </div>
            }
        </div>
        
    );
}

export default Home;