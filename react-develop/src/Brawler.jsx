import React from "react";
import { Link } from "react-router-dom";
const Brawler = ( {brawler} ) => {
    
    return (
       
    <div className='brawler'>
        
        <Link key ={brawler.id} to= {'/brawler/${brawler.id}'}>
        <div>    
                <img 
                    src ={brawler.Pic} 
                    alt ={brawler.Name}/>
        </div>
        
        <div>
            <span>{brawler.Rarity}</span>
            <h3>{brawler.Name}</h3>
        </div>
        </Link>
        
    </div>

    );
}

export default Brawler