import React, { useEffect, useState } from 'react'
import { Axios } from '../../../api/server';
import Todo from './Todo'
import { toast } from 'react-toastify'


const TodoList = ({setReload, reload}) => {
  const [data, setData] = useState([]);

  useEffect(()=>{
    getAllTodos();
  },[reload])

  

  // const getTodos =async ()=>{
  //   try {
  //     const response = await fetch("https://www.frontendv1.sojodata.com/api/v1/todos");
  //     const rawData = await response.json();
  //     setData(rawData)
      
  //   } catch (error) {
  //     console.log(error,"Error loading data")
  //   }
  // }


  const getAllTodos = async ()=>{
    try {
      const res =await Axios.get("todos");
      setData(res.data.reverse());
        setReload((prev)=>!prev)
    } catch (error) {
      toast.error("Error on fetching all todos!")
      

    }
  }
      
  
  // console.log(raw,"raw Data")
  return (
    <div className='flex flex-col gap-3'>
        {
          data?.map((item)=>{

             return <Todo setReload={setReload} item={item}  />
          })
        }

    </div>





      // raw.map((item)=>{
      //   <div className='flex flex-col gap-3'>
      //   <Todo item={item}/>
      // </div>
      // }) 
    
    
  )
}


export default TodoList