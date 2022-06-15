// import React from 'react'
import './Counter.css'

import React from 'react'

 class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state={
            count:0
        };
    }
    Increase=()=>{
        this.setState({
            count:this.state.count + 1 
        });
    };
    Decrease=()=>{
        this.setState({
            count:this.state.count - 1
        });
    };
    reset=()=>{
        this.setState({
            count:0
        })
    }
  render() {
    return (
      <div className="Main-div">
         {/* ?= Nullish Operator | It checks first left and then right Value if left is Null then it'll Return the Right side */}

 <div style={{margin:"auto",border:"1px solid black",borderRadius:"50%",backgroundColor: this.state.count === 0 ?"green" :this.state.count >0 ? "yellow":"red",width:"250px",height:"250px"}}></div>                                                          
 <h1>Count:{this.state.count}</h1>
        <button onClick={this.Increase}>++</button>
        <button onClick={this.Decrease}>--</button>
        <button onClick={this.reset}>reset</button>
      </div>
      
    )
  }
}
export default Counter