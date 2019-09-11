import React from 'react'; 

import './tile.styles.scss'; 

// This component will take an array of 16 squares and map them to our Board component. 

function Tiles () {
    const squares = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    return (
        <div className='tiles_wrapper'>
            {
                squares.map( square => {
                    return <div className='tiles'>{square}</div>
                })
            }
        </div>
    )
};

export default Tiles; 