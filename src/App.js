import React, { Component } from 'react';
import './App.css';
import Snake from './Components/Snake';
import Food from './Components/Food';

const initialState = 
{
  speed:300,
  food : [4,4] , 
  direction:'RIGHT' ,
  snakeSquares :
  [
    [0,0],
    [4,0],
    [8,0],
    [12,0]
  ]
}
class App extends Component {
 
  state = initialState;
 
 

 
  render(){
  return (
    <div className="container">
      <div className='arena'>
     <Snake snakeSquares={this.state.snakeSquares}/>
     <Food dot={this.state.food}/>
    </div>
    </div>
  );
  }
}

export default App;
