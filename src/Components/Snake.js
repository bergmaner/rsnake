import React, {Component} from 'react';

class Snake extends Component
{
    render()
    {
    return(
        <React.Fragment>
            
            {this.props.snakeSquares.map((square,i) =>
            {
                
                const style = 
                {
                    left:`${square[0]}%`,
                    top:`${square[1]}%`,
                    background:`rgb(0,${i*2},${i*7})`
                }
                return(
                    <div className='snake-square'key={i} style={style}></div>
                )
            })}
        </React.Fragment>
    )
}
}
export default Snake;
