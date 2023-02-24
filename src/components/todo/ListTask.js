import React from 'react'
import { Button } from 'react-bootstrap'

const ListTask = ({task,removeTask,index}) => {
  return (
    <>
    <div className='taskss'>
      {task.title}

        <Button onClick={() =>{removeTask(index)}} className='delbtn'>Delete</Button>
    </div>
    </>
  )
}

export default ListTask