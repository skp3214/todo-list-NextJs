"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])

  const submitHandler=(e)=>{
     e.preventDefault()
     setmainTask([...mainTask,{title,desc}]);
     settitle("")
     setdesc("")
  }

  const deleteHandler=(i)=>{
     let copyTask=[...mainTask]
     copyTask.splice(i,1)
     setmainTask(copyTask);
  }



  let renderhead=<h2 className="bg-custom-color4 h-12 w-full text-center font-bold text-2xl pt-2 text-custom-color3 ">No Task Available</h2>
  let renderTask=""

  if(mainTask.length>0){
    renderhead=<h2 className="bg-custom-color4 h-12 w-full text-center font-bold text-2xl pt-2 text-custom-color3 ">Added Tasks</h2>
    renderTask=mainTask.map((t,i)=>{
      return (
        <li key={i} className="flex items-center justify-between mt-1 bg-custom-color3 h-20">
          <div className='flex flex-row w-10/12 '>
          <h5 className='text-3xl font-semibold mx-8 w-1/2 text-custom-color'>{t.title}</h5>
          <h5 className='text-lg font-semibold  w-1/2 text-custom-color'>{t.desc}</h5>
          </div>
          <button onClick={()=>deleteHandler(i)} className="bg-custom-color4 text-custom-color3 p-3 text-2xl rounded font-bold mx-4 w-2/12">Delete</button>
        </li>
      )
  })
  }
  return (
    <>
       <h1 className='bg-custom-color text-custom-color3 font-bold text-center p-5 text-5xl' > Todo-list</h1>
       <form onSubmit={submitHandler} className="flex flex-row">
          <input type='text' className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2 basis-2/5' placeholder='Enter title Here' value={title} onChange={(e)=>{settitle(e.target.value)}}></input>
          <input type='text' className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2 basis-2/5' placeholder='Enter Description Here' value={desc} onChange={(e)=>{setdesc(e.target.value)}}></input>
          <button className='bg-custom-color text-custom-color3 px-4 py-3 m-5 text-2xl font-bold rounded basis-1/5 '>Add Task</button>
       </form>
       <div className=''>
            {renderhead}
            {renderTask}
       </div>
    </>
  )
}

export default page