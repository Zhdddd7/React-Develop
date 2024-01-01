import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './App.css';
import {BrawlerList} from './BrawlerList';
import { DataGrid } from '@mui/x-data-grid';
const BrawlerDetail = () => {
    const { brawlerId } = useParams();
    const brawler = BrawlerList.find(b => b.id === parseInt(brawlerId));
  
    const navigate = useNavigate();

    const columns = [
      { field: 'id', headerName: 'ID', width: 70},
      { field: 'Name', headerName: 'Name', width: 130 },
      { field: 'Rarity', headerName: 'Rarity', width: 130 },
      {field: 'Movement', headerName: 'Movement', width: 130},
      {field: 'Attack', headerName: 'Attack', width: 70},
      {field: 'HP', headerName: 'HP', width: 70}

    ];

  
    const rows = [
      {id: brawler.id, Name: brawler.Name, Rarity: brawler.Rarity, 
      Movement: brawler.Movement, Attack: brawler.Attack, HP: brawler.HP}

    ];

    return(
      <div>
        {brawler?(
            <div>
              <img src = {brawler.Pic} alt={brawler.Name}/>
              <div style={{ height: 150, width: '80%' }}>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 5 },
                    },
                  }}
                  
                  />
    </div>
            </div>
            
            
            
          ):
          (
            <div>
              Brawler not found
            </div>
          )
        }
         <button className='backtomenu'onClick={() => navigate(-1)}>Back to Menu</button>
      </div>
    
    );
  };
  
  export default BrawlerDetail;