import React from 'react';
import Tiles from '../tiles/tile.component'; 
 

import './board.styles.scss'; 

function Board() {
 
   return (
    <div className='board_wrapper'>
        <div className='board_container'>
            <Tiles />
        </div>
    </div>
   )
};

export default Board;