import React from "react";

export default function Header(){
  return(
    <div>
      <h1 className='header' onClick={()=>{
        window.scroll(0,0)
      }}>MovieH<span>U</span>B 🎬</h1>
    </div>
  )
}

//window.scoll(0,0)  get take us to the bottom of the page