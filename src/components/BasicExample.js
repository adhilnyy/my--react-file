import React,{useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';

const BasicExample = () => {

  const [count,setCount] = useState(0)
  const [colour, setColour] = useState("yellow");

  useEffect(function () {
    console.log("side effects ");

  },[colour] )
  
  
 
  const changeColour = () => {
    setColour("red")
  }
  const plus = () => {
    setCount(count + 1)
  }
  const minus =() => {
    setCount(count - 1)
  }
 
  return (
    <div>
      <h1 className='bg-primary text-white'>useState hook</h1>
      <h2>{colour}</h2>
      <Button variant="success" onClick={changeColour}>click me</Button>
      <h3>{count}</h3>
      <Button className='mx-2' variant="primary" onClick={plus}>+</Button>
      <Button variant="secondary" onClick={minus}>-</Button>
      
    </div>
  )
}

export default BasicExample