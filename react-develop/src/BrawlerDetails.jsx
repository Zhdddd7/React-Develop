import React from "react";

const BrawlerDetails = ( {brawler} ) => {
    
    return (
       
    <div className='brawlerdetails'>
        <div>
            <span>{brawler.Rarity}</span>
            <h3>{brawler.Name}</h3>

        </div>

    </div>

    );  
}

export default BrawlerDetails