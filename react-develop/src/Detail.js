import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

function Detail(){
    const navigate = useNavigate();
     return (
        <div>
            <button onClick={() => navigate('/')}>Back to Menu</button>
        </div>
     );
}

export default Detail;