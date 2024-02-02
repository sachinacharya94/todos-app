import React, {  useContext, useState } from 'react'
import TextInput from '../TextInput'
import TodoButton from '../TodoButton'
import { Axios } from '../../../api/server'
import { toast } from 'react-toastify'
import { ReloadContext } from '../../pages/TodoPages'

const ToDoInput = () => {
    const [todoInput, setTodoInput]= useState("")
    

    const {setReload} = useContext(ReloadContext)
    

    const AddTodo = async()=>{
        try {
         const res= await Axios.post("todos", {title:todoInput})
          setTodoInput("")
          setReload(prev=>!prev);
          // console.log(res,'response')
          if(res.status==201){
            toast.success("Todo added successfully!")
          }

        } catch (error) {
          toast.error(error.message);
        }
        

    }

  return (
    <div className='flex gap-3 flex-col border-solid border-[1px] border-[#000] py-3 px-6'>
        <TextInput todoInput={todoInput} setTodoInput={setTodoInput}/>

        <TodoButton  onClick={AddTodo} text={"Add new Task"} />

    </div>
  )
}

export default ToDoInput