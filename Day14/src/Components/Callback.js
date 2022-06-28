import React,{useState} from 'react'
import Button from './callback/Button';
import Input from './callback/Input';

function Callback() {
  const [age ,setAge]=useState(20);
  const [salary, setSalary]=useState(20000)
  // const handleIncreament=
  return (
    <div>
      <Input/>
      <Button/>
    </div>
  )
}

export default Callback