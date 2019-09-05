import React from 'react';
import Tiles from '../tiles/tile.component';  

import './board.styles.scss'; 

function Board({ boardState, handleClickTile }) {
    return (
       <div className='GameBoard'>
           {Tiles}
       </div>
    )
};

export default Board;