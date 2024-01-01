import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import BrawlerDetail from './BrawlerDetail'



function App() {
  return (
    <Router>
        <div>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/brawler/:brawlerId" element={<BrawlerDetail />} />       
            </Routes>
        </div>

    </Router>
  );
}

export default App;
