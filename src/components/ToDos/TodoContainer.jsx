import React from 'react'
import TodoButton from '../TodoButton'
import TodoList from './TodoList'

const TodoContainer = ({setReload, reload}) => {
  return (
    <div className='mt-8 flex flex-col gap-4 mb-[60px]'>
      <h1 className='text-center text-2xl font-medium'>To do List</h1>
      <div className='flex gap-2'>
        <TodoButton onClick={()=>{}} text ={"All"}/>
        <TodoButton onClick={()=>{}} text ={"Done"}/>
        <TodoButton onClick={()=>{}} text ={"ToDo"}/>
      </div>
      <TodoList setReload={setReload} reload={reload}/>

    </div>
  )
}

export default TodoContainer