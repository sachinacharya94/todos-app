import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Axios } from "../../api/server";
import { toast } from 'react-toastify'


const TodoEdit = () => {
  const navigate = useNavigate();

  const [data, setData ] = useState();

  const {id } = useParams();


  useEffect(()=>{
    getTodoById()
  },[])

  const getTodoById =async()=>{
    try {
        const res = await Axios.get(`todos/${id}`)
        setData(res.data.title)
        
    } catch (error) {
        toast.error("Error loading todos!")
    }

  }

  const updateTodoById =async (e)=>{
    e.preventDefault();
    try {
        await Axios.patch(`todos/${id}`,{title: data})
        goBack();
        toast.success("Todo edited successfully");
    } catch (error) {
        toast.error("Failed to edit todo!")
        
    }

  }

  const handleSubmit = (e) => {};

  const goBack = () => {
    navigate("/");
  };
  return (
    <div className="h-screen w-screen relative">
      <div className="absolute w-[30rem] rounded-xl p-[20px] bg-slate-200 h-[20rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-center font-medium text-xl">Todo Edit</h1>
        {/* Form to edit page */}
        <form
          onSubmit={handleSubmit}
          action=""
          className="mt-10 h-full flex gap-y-10 flex-col"
        >
          <input
            type="text"
            placeholder="Edit Todo"
            value={data}
            onChange={(e) => setData(e.target.value)}
            className="w-full leading-8 rounded-xl p-3 text-xl focus:outline-none"
          />

          <div className="flex gap-3">
            <button
              className="btnCls  bg-green1 hover:bg-green2 "
              type="submit"
              onClick={updateTodoById}
            >
              Edit
            </button>

            <button onClick={goBack} className=" bg-red1 btnCls">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoEdit;