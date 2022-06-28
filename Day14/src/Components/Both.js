import React, { useState, useCallback } from 'react';
import Title from '../Components/callback/Title';
import Count from '../Components/callback/Count';
import Button from '../Components/callback/Button';
function Both() {

  const [age, setAge] = useState(25);
  const [sal, setSal] = useState(50000);
  
  const incrementAge = useCallback(() => {
    console.log(incrementAge);
    setAge(age + 1);
  }, [age]);
  const incrementSal = useCallback(() => {
    console.log(incrementSal);
    setSal(sal + 1000);
  }, [sal]);
  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={sal} />
      <Button handleClick={incrementSal}>Increment Salary</Button>
    </div>
  );
}
export default Both;

// make a state
// try to usememo