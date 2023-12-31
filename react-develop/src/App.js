import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import BrawlerDetail from './BrawlerDetail'
import BrawlerList from './BrawlerList';


function App() {
  return (
    <Router>
        <div>
            <Routes>

                <Route path="/" element={<Home brawlers={brawlers}/>}/>

                <Route path="/brawler/:brawlerId" element={<BrawlerDetail brawlers={brawlers}/>} />
                   
               
            </Routes>
        </div>

    </Router>
  );
}

export default App;
