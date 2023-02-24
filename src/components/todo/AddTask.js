import React, { useState } from 'react'
import { Button } from 'react-bootstrap'


const AddTask = ({addTask}) => {
  const [values,setValues] = useState("")
  const addItem =() =>{
    addTask(values)
    setValues("")
  }
  
  return (
    <>
    <div className='input-container'>
        <input className='input' type='text' placeholder='Add a task' value={values} onChange={(e)=>{setValues(e.target.value)} } />
        <Button onClick={addItem} className='addbtn' >ADD</Button>
    </div>
    </>
  )
}

export default AddTask