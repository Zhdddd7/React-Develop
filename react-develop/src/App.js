import React from 'react';
import './App.css';
const brawler0 = {
    "Name": "Shelly",
    "Rarity": "Basic",
    "Movement": 770,
    "HP": 7400,
    "Attack" : 600,
    "Pic": 'https://media.brawltime.ninja/brawlers/shelly/model.webp?size=100'}
const App = () => {
    return (
        <div className='app'>
            <h1>BrawlStar</h1>

            <div className='container'>
                <div className='brawler'>
                    <div>
                        <img 
                            src ={ brawler0.Pic} 
                            alt ={brawler0.Name}/>
                        </div>



                    </div>


            </div>
        </div>

       

        
    );
}

export default App;