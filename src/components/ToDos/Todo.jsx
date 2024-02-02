import React, { useContext, useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import EditModal from "../EditModal";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Axios } from "../../../api/server";
import { toast } from 'react-toastify'
import { ReloadContext } from "../../pages/TodoPages";




const Todo = ({item}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  // const [completed, setCompleted] = useState(false);
  const navigate =useNavigate();

  const {setReload} = useContext(ReloadContext)


  // console.log(props,"props");

  // const {title} = props.item;


  const openModal=()=>{
    setIsOpen(true);
  }

  const RedirectToEditPage = ()=>{
    navigate(`/todos/${item.id}`)
  }

  const toggleCompleted= async ()=>{
    const data = {completed:!item.completed}
    try {
      await Axios.patch(`todos/${item.id}`, data)
      setReload((prev)=>!prev)
      toast.success("Toggle completed Successfully!!")
    } catch (error) {
      toast.error("Toggle is not completed !!")
    }
  } 

  return (
    <>
    <EditModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} item={item} />
      <div
        className={`${
          item.completed && "text-red1 line-through"
        } flex justify-between items-center py-[0.5px] px-2 leading-10 
    border-solid border-[2px] border-[#d1d5db]`}
      >
        <p>{item.title}</p>

        <div className="flex gap-x-3 items-center">
          <input
            onClick={() => toggleCompleted()}
            className="accent-green-700 w-6 h-5 hover:cursor-pointer p-1"
            type="checkbox"
            name=""
            id=""
            checked={item.completed}
          />
          <FaPencilAlt
            onClick={RedirectToEditPage}
            className="w-5 h-5 hover:cursor-pointer hover:scale-110 "
            color="#eab308"
          />
          <MdDelete
            onClick={openModal}
            color="#db3345"
            className="w-6 h-6 hover:cursor-pointer hover:scale-110"
          />
          
        </div>
      </div>

    

    
    </>
    
  )
}

export default Todo