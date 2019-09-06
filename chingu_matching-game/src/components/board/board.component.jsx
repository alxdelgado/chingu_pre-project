import React from 'react';
import Tiles from '../tiles/tile.component'; 
import GameBoard from '../game-board/game-board.component';  

import './board.styles.scss'; 

function Board({ boardState, handleClickTile }) {

   return (
    <div className='board_wrapper'>
        <div className='board_container'>
            <GameBoard>
                
            </GameBoard>
        </div>
    </div>
   )
};

export default Board;