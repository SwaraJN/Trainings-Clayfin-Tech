import React from 'react'
import Grandchild  from './Grandchild'


 const Child = (props) => {
    const{users}=props //Destructuring //props are as objects 
    console.log('users',users)
  return (
    <div>{users.map((e)=>{
        return<Grandchild name={e.name} age={e.age} city={e.city}></Grandchild>
    })}    </div>
  )
}
export default Child