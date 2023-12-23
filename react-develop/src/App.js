import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Detail from './Detail'


function App() {
  return (
    <Router>
        <div>
            <Home />
            <Routes>
              <Route>
                <Detail/>
              </Route>
            </Routes>
        </div>

    </Router>
  );
}

export default App;
