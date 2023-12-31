import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import Brawler from './Brawler';
import { BrawlerList } from './BrawlerList';
   
    
    const Home = ({brawlers}) => {
        //click to jump to the new page
        const navigate= useNavigate();
        

    return (
        <div>
            <h1>BrawlStar</h1>

            {BrawlerList?.length > 0
                ?(
            <div className='container' onClick={() => navigate('/Detail')}>
           
                {BrawlerList.map((brawler) => (
                < Brawler brawler ={brawler}/>
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