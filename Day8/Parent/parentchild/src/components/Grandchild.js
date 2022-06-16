import React from 'react'
import "./Gchlid.css"
const Grandchild = (props) => {
    const{name,age,city}=props
  return (
    <div className="main">


    <div className="Main-Div">
        <h3>Name:{name}</h3> <hr/>
        <h3> age:{age}</h3> <hr/>
        <h3>City:{city}</h3><hr/>
        </div>
    </div>
  )
}
export  default Grandchild
