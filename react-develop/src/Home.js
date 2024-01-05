import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import Brawler from './Brawler';
import { BrawlerList } from './BrawlerList';
import BrawlerRankings from './BrawlerRankings';
    
    const Home = () => {
        const navigate = useNavigate();

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
                <div>
                    <button className='brawlerranking'onClick={() => navigate('./BrawlerRankings')}>go to the ranking</button>
                </div>
            </div>
            
        );
}

export default Home;