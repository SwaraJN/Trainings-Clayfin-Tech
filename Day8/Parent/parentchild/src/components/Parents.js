import React ,{useState} from 'react'
import Child  from './Child'

 const Parents = () => {
    const[data,setData]=useState([
        {name:"Jay",city:"nashik",age:"24"},
        {name:"Shree",city:"pune",age:"25"},
        {name:"Ram",city:"mumbai",age:"26"}
    ])
  return (
    <div><Child users={data}/></div>
  )
}
export default Parents