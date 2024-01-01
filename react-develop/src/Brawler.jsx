import React from "react";
import { useNavigate } from "react-router-dom";
const Brawler = ({id, Name, Pic, Rarity}) => {

const navigate= useNavigate();

const hanleClick = () => {
    navigate(`/brawler/${id}`);
};

    return (
       
    <div className='brawler' onClick={hanleClick}>
        
        
        <div>    
                <img src ={Pic} alt ={Name}/>
        </div>
        
        <div className="brawlerlabel">
            <span>{Rarity}</span>
            <h3>{Name}</h3>
        </div>
        
    </div>

    );
}

export default Brawler