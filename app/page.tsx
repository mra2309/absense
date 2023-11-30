'use client'

import Image from 'next/image'
import { useState } from 'react';

const themeData = ["light",
"dark",
"cupcake",
"bumblebee",
"corporate",
"fantasy",
"wireframe",
"coffee"]

export default function Home() {
  const [theme, setTheme] = useState("");
  const [visible, setVisible] = useState(false);
  const [themes, setThemes] = useState("default");
  return (
    <div data-theme={themes}>
      <div className='flex flex-col min-h-screen'>
      {visible?(
       <>
        <div className='card max-w-full m-auto'>
          <div className='card-body text-center'>
          <div className='md:text-9xl text-5xl font-semibold'>
                  SENIN
            </div>
            <div className='md:text-9xl text-5xl  font-semibold my-4'>
                  30 NOVEMBER 2023
            </div>
            <div className='md:text-9xl text-5xl  font-semibold'>
             {theme} 
            </div>
            <button className="btn btn-circle m-auto" onClick={(e)=>setVisible(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
        </div>
       </> 
      ):(
       <>
        <div className='card shadow-sm max-w-lg m-auto border'>
          <div className='card-body'>
            <div className='card-title'>
              <h1>Hallo Dev , Apa Tema Hari Ini ?</h1>
            </div>
            <input type="text" placeholder="Type here" onChange={(e)=>{setTheme(e.target.value)}} className="input w-full max-w-xs input-bordered" />
            <div className="form-control">

            {themeData.map((item,index)=>{
              return(
                <div className="form-control" key={index}>
                    <label className="label cursor-pointer gap-4">
                    <span className="label-text">{item}</span>
                    <input type="radio" name="theme-radios" className="radio theme-controller" onClick={(e)=>setThemes(e.target.value)} value={item}/>
                    </label>
                </div>
              )
            })}
            <button className='btn' onClick={(e)=>{setVisible(true)}}>GENERATE</button>
          </div>
        </div>
        </div>
       </> 
      )}
      </div>
    </div>
  )
}

