import React from 'react';

import './App.css';
import { useNavigate } from 'react-router-dom';
import { BrawlerList } from './BrawlerData';
import BrawlerDetails from './BrawlerDetails';

function Detail(){
    const navigate = useNavigate();
     return (
        
        <div>
           {BrawlerList?.length > 0
                ?(
            <div className='detailcontainer' onClick={() => navigate('/Detail')}>
           
                {BrawlerList.map((brawler) => (
                < BrawlersDetails brawler ={brawler}/>
                ))}
            
            </div>): 
            <div className='empty'>
                <h2>No brawlers available</h2>
                </div>
            }
            <button onClick={() => navigate('/')}>Back to Menu</button>
        </div>
     );
}

export default Detail;