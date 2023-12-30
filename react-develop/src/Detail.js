import React from 'react';

import './App.css';
import { useNavigate } from 'react-router-dom';
import { BrawlerList } from './BrawlerData';
import BrawlersDetails from './BrawlerDetails'

function Detail(){
    const navigate = useNavigate();
     return (
        
        <div>
            <button onClick={() => navigate('/')}>Back to Menu</button>
           {BrawlerList?.length > 0
                ?(
            <div className='detailcontainer' onClick={() => navigate('/Detail')}>
           
                {BrawlerList.map((brawler) => (
                <BrawlersDetails brawler ={brawler}/>
                ))}
            
            </div>): 
            <div className='empty'>
                <h2>No brawlers available</h2>
                </div>
            }
            
        </div>
     );
}

export default Detail;