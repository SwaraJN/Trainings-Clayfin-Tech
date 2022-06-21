import axios from 'axios';
import React, { Component, useContext } from 'react'
import DataContext, { DataProvider } from './ProdContext';
import "./Prod.css"

export class Data extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      errMessage: ""
    }
  }
  // As it is always good to use asynchronous fucntion because it won't affect the performance of th application
  //async take time to execute and update it updates the UI for the user and won't be in queue
  componentDidMount() {
    axios.get('https://fakestoreapi.com/products').then((resp) => {
      const userList = resp.data;
      console.log(userList)
      this.setState({ list: userList })
    }).catch((e) => { 
      console.log('err');
      console.log(e)
    })

  }
  render() {
    console.log(this.state.list)
    return (
      <div>
        <DataProvider value={this.state.list}>
          <Child />
        </DataProvider>
      </div>
    )
  }
}

function Child() {
  const dataList = useContext(DataContext)
  console.log('data', dataList)
  return (<div>
{
  dataList.map((ele,img) => (<div key={ele.id}>
    <div className="main-div">
     <p><b>Title:</b> Title:{ele.title}</p>
     <p><b>$:</b>{ele.price}</p><br />
     <p className="desc"><b>Description:</b> {ele.description}</p>
     <img src={ele.image} alt="" />
     </div>
  </div>))
}
  </div>)
}


export default Data