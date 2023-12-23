import React from "react";

const Brawlers = ( {brawler0} ) => {
    
    return (
       
    <div className='brawler'>
        <div>
            
                <img 
                    src ={brawler0.Pic} 
                    alt ={brawler0.Name}/>
        </div>
        
        <div>
            <span>{brawler0.Rarity}</span>
            <h3>{brawler0.Name}</h3>
        </div>

    </div>

    );
}

export default Brawlers