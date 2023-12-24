import React from "react";

const Brawlers = ( {brawler} ) => {
    
    return (
       
    <div className='brawler'>
        <div>
            
                <img 
                    src ={brawler.Pic} 
                    alt ={brawler.Name}/>
        </div>
        
        <div>
            <span>{brawler.Rarity}</span>
            <h3>{brawler.Name}</h3>
        </div>

    </div>

    );
}

export default Brawlers