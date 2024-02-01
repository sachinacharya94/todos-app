import React from 'react'

const TodoButton = ({text, onClick}) => {
  // console.log(text,'text on todobutton')
  return (
    <button
    onClick={onClick} className='w-full py-[6px] rounded-[7px] bg-green1 text-white hover:bg-green2 transition durstion-100'
    >
      {text}
    </button>
  )
}

export default TodoButton