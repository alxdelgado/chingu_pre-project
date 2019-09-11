import React from 'react'; 

import './tile.styles.scss'; 

// This component will take an array of 16 squares and map them to our Board component. 


// Tiles - Smart Component
class Tiles extends React.Component {
    constructor(props) {
        super(props); 

        this.state = {
            tileClick: true
        }

        this.handleClick = this.handleClick.bind(this);
    }

    // HandleClick Method
    handleClick() {
       console.log('this is', this);
    }

    render () {
        const squares = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

        return (
            <div className='tiles_wrapper'>
                { squares.map( square => {
                    return <div className='tiles' onClick={(e) => this.handleClick(e)}>{square}</div>
                    
                })}
            </div>
        )
    }  
};

export default Tiles; 


// Original thought process - used a smart component instead. 
// const Tiles = (props) => {
//     const squares = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
//     return (
//         <div className='tiles_wrapper'>
//             {
//                 squares.map( square => {
//                     return <div className='tiles' onClick={props.handleClick}>{square}</div>
//                 })
//             }
//         </div>
//     )
// };

// export default Tiles; 