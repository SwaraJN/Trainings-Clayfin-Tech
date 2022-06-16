import React ,{useState} from 'react'

const Destructuring = () => {
    const object ={name:"Swaraj",dob:"16"}
    const[name,setName]=useState(object)
    console.log(name)
  return (
    <div>
        <button onclick={()=>{
          setName({...object,name:"Bhushan"})
        }}>click</button>
    </div>
  )
}

export default Destructuring