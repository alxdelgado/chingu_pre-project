import React from 'react'; 

import './tile.styles.scss'; 

function Tiles({ tile, isOpen, handleClickTile }) {
    return (
        <div className='tile_wrapper'
            onClick={!isOpen ? handleClickTile : null}
            isOpen={isOpen}>
            
        </div>
    )
};

export default Tiles; 