import React, { Component } from 'react'
import Gallery  from './Gallery'
import "./Data.css"


export default class Data extends Component {
  render() {
    return (
      <div className="Main-Div">
        {Gallery?.map((e,index)=>(
          <div className="images" key={index}>
          <img src={e.url} key={index} alt="img"/><br />
          <p>{e.name}</p>
          <p>{e.detail}</p>
          </div>
          
        ))}
      </div>
    )
  }
}
