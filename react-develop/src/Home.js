import React from 'react';
import './App.css';
import Brawler from './Brawler';
import { BrawlerList } from './BrawlerList';
   
    
    const Home = () => {
    return (
        <div>
            <h1>BrawlStar</h1>

            {BrawlerList?.length > 0
                ?(
            <div>
           
                {BrawlerList.map(brawler => (
                <Brawler key = {brawler.id} {...brawler}/>
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