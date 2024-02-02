import React, { createContext, useState } from 'react'
import ToDoInput from '../components/TodoInput/index'
import TodoContainer from '../components/ToDos/TodoContainer'


export const ReloadContext = createContext();

const TodoPages = () => {
  const [reload, setReload] = useState(false)



const reloadData = {
  reload,
  setReload
}

  return (

    <ReloadContext.Provider value={reloadData}>
<     div className='max-w-[76rem] mx-auto mt-10'>
        <h1 className='text-center font-medium text-2xl mb-5'>Enter Todo here:</h1>
        <ToDoInput />
        <TodoContainer />
    </div>

    </ReloadContext.Provider>
    
  )
}

export default TodoPages