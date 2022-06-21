import React, { Component } from 'react'

export default class button extends Component {
  
        constructor(){
          super();
          this.state={
            name:'',
          };
        }
        handlechange=(e)=>{
          this.setState({name:e.target.value})
        }
        click=(e)=>{
          if (this.state.name.length > 0){
            this.setState({...this.state,isCheck:true})
            alert(this.state.name)
          }else{
            this.setState({...this.state,isCheck:false})
            alert("Enter Credentials")
          };
        }
  render() {
    console.log(this.state.name)
    return (
      <div>
        <input type="text" onChange={this.handlechange}/>
        <button onClick={this.click}>Click</button>
        {/* <input type="text"  /> */}
      </div>
    )
  }
}
