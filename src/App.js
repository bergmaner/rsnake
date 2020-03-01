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
  componentDidMount()
  {
    setInterval(this.moveSnake,this.state.speed);
    document.onkeydown = this.onKeyDown;
  }
  onKeyDown = (e) =>
  {
    e = e || window.event;
    switch(e.keyCode)
    {
      case 38 : 
      this.setState({direction:'UP'});
      break;
      case 40 : 
      this.setState({direction:'DOWN'});
      break;
      case 37 : 
      this.setState({direction:'LEFT'});
      break;
      case 39 : 
      this.setState({direction:'RIGHT'});
      break;
    }
  }
  moveSnake = () =>
  {
    let squares = [...this.state.snakeSquares];
    let head = squares[squares.length-1];
    let food = this.state.food;
    // 4 in suitable direction
    switch(this.state.direction)
    {
        case'LEFT':
        squares.push([head[0] - 4,head[1]]);
        break;
        case'RIGHT':
        squares.push([head[0] + 4,head[1]]);
        break;
        case'UP':
        squares.push([head[0],head[1] - 4]);
        break;
        case'DOWN':
        squares.push([head[0],head[1] + 4]);
        break;
    }
    squares.shift();// remove first element
    this.setState({snakeSquares : squares});//update state
  }

 
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
