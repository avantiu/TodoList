import React, { useState } from 'react'
import './Todo.css'
import { AiOutlinePlus, AiFillDelete, AiFillEdit } from "react-icons/ai";
// import axios from 'axios';

const Todo = () => {

    const [value, setValue] = useState("")
    const [newItem, setnewItem] = useState([])
    const [show, setShow] = useState(false)
    const [editIndex, setEditIndex] = useState()

    const handleAdd = () => {
        if (value.length !== 0) {
            setnewItem(newData => [...newData, value])
            setValue("")
        }
    }

    const handleDelete = (index) => {
        newItem.splice(index, 1)
        setnewItem([...newItem])
    }

    const handleEdit = (i) => {
        setValue(newItem[i])
        setShow(true)
        setEditIndex(i)
    }
    const handleUpdate = () => {
        newItem.splice(editIndex, 1, value)
        setnewItem([...newItem])
        setShow(false)
        setValue("")
    }

    // let handledelete =(id)=>{
    //     let newdata= items.filter((e)=>{
    //        return e.id !== id
    //     })
    //     setItems(newdata)
    // }


    return (
        <>
            <div className="container">
                <div className="section p-4">
                    <h1 className='my-4 todo' style={{ color: "wheat", fontFamily: "emoji" }}>Todo List</h1>
                    <div className="data position-relative">
                        <input type="text" className='form-control maininput mx-auto' value={value} onChange={(e) => setValue(e.target.value)} placeholder='Add items' />

                        {
                            !show ? <button className="btn border-0"><AiOutlinePlus className='position-absolute plus end-0 translate-middle-y' onClick={handleAdd} title='add items' style={{ left: "78%" }} /></button> :
                                <button className='btn border-0'><AiFillEdit className='position-absolute plus end-0 translate-middle-y text-danger' style={{ left: "65%" }} onClick={() => handleUpdate()} /></button>
                        }
                    </div>
                    {
                        newItem.map((val, i) => {
                            return (
                                <div className="col-md-8 mx-auto data position-relative my-3" key={val.id}>
                                    <input type="text" className='form-control mx-auto' value={val} onChange={(e) => newItem(e.target.value)} placeholder='Add items' />
                                    <button className='btn border-0'><AiFillDelete className='position-absolute plus mx-1 end-0 translate-middle-y text-danger' title='add items' style={{ left: "78%" }} onClick={() => handleDelete(i)} /></button>
                                    <button className='btn border-0'><AiFillEdit className='position-absolute plus end-0 translate-middle-y text-danger' style={{ left: "65%" }} onClick={() => handleEdit(i)} /></button>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </>
    )
}

export default Todo