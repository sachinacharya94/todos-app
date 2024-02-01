import React from 'react'

const TextInput = ({todoInput, setTodoInput}) => {

  return (
    <input type="text" 
    placeholder='Enter tods'
    className='w-full py-[0.5px] px-2 leading-8 focus:outline-none border-solid border-[2px] border-[#d1d5db]'
    value={todoInput}
    onChange={(e)=>setTodoInput(e.target.value)}
    />
  )
}

export default TextInput