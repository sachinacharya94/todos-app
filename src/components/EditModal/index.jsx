import React, { useContext } from 'react'
import Modal from 'react-modal'
import { Axios } from '../../../api/server';
import { toast } from 'react-toastify'
import { ReloadContext } from '../../pages/TodoPages';




const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };


const  EditModal = ({modalIsOpen, setIsOpen, item}) => {


  const {setReload} = useContext(ReloadContext)

    function closeModal(){
        setIsOpen(false);
    }


    async function deleteTodo(){
        try {
            await Axios.delete(`todos/${item.id}`)
            setIsOpen(false)
            toast.success(`${item.title} is deleted!`)
            setReload(prev=>!prev)
        } catch (error) {
            toast.error("Todo is not deleted!!")
        }
    }

    
  return (
    <Modal
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    style={customStyles}
    overlayClassName="Overlay"
    >
        <div className="flex gap-y-5 flex-col">
        <p className=" font-medium text-[1.5rem]">
          Are you sure you want to delete this todo?
        </p>

        <div className="flex gap-x-5">
          <button onClick={deleteTodo} className=" bg-red1 btnCls font-normal">
            Delete
          </button>

          <button
            onClick={closeModal}
            className=" bg-green-700  btnCls font-normal"
          >
            Cancel
          </button>
        </div>
      </div>


    </Modal>
  )
}

export default EditModal