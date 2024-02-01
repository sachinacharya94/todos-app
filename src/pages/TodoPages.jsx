import React, { useState } from 'react'
import ToDoInput from '../components/TodoInput/index'
import TodoContainer from '../components/ToDos/TodoContainer'

const TodoPages = () => {
  const [reload, setReload] = useState(false)
  return (
    <div className='max-w-[76rem] mx-auto mt-10'>
        <h1 className='text-center font-medium text-2xl mb-5'>Enter Todo here:</h1>
        <ToDoInput setReload={setReload}/>
        <TodoContainer setReload={setReload} reload={reload}/>
    </div>
  )
}

export default TodoPages