import React from 'react';

import './App.styles.scss';

import Board from './components/board/board.component'; 

class App extends React.Component {

  // make an array of numbers 
  // iterate over the numbers spit them out. 

  render() {

    return (
      <div className="App">
          <h1>Matching Game</h1>
          <Board />
      </div>
    );

  }
}; 

export default App;


// Thinking out loud so to speak, pseudo code to figure out how to map the squares. 
// const squares = [1,2,3,4,5,6,7,8];
  // {/* <div className='board_container'>
  //           { squares.map( square => 
  //               <span className="tiles">{square}</span>
  //           )
  //           }
  //         </div>  */}