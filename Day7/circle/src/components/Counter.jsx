import React from 'react'
import './Counter.css'
// export default
 
class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
    // change code below this line
  
    increment= () => {
      this.setState({
        count: this.state.count + 1
      });
    };
    
    decrement= () => {
      this.setState({
        count: this.state.count - 1
      });
    };
  
    reset= () => {
      this.setState({
        count: 0
      });
    };
  
    render() {
      return (
  
     <div className="Main-div">
         <div style={{border:"1px solid black", borderRadius:"50%",backgroundColor : this.state.count === 0 ? "green" : this.state.count > 0 ? "yellow":"red",width:"200px",height:"200px"}}></div>
     
     <button className='inc' onClick={this.increment}>Increment!</button>
      <button className='dec' onClick={this.decrement}>Decrement!</button>
      <button className='reset' onClick={this.reset}>Reset</button>
      <h1>Count: {this.state.count}</h1>
    </div>
      );
    }
  };
  export default Counter