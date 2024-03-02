import React, { useState , useEffect} from "react"
import { data } from "./data"
function App() {

  const [activeIndex,setActiveIndex] = useState(0);
  const handleNext = () =>{
    setActiveIndex((activeIndex+1)%data.length);

  }

  const handlePrev = () =>{
    (!activeIndex ? setActiveIndex(data.length-1) : setActiveIndex(activeIndex-1));
  }

  useEffect(()=>{

   setInterval(()=>{
handleNext()
   },5000)

   return ()=>{
      clearInterval();
   }

  },[activeIndex])

  return (
    <>
      <div className="flex  justify-center">
      <button className=" h-auto border border-slate-600 border-round" onClick={handlePrev}>prev</button>
      {
        data.map((url, i)=>(
          <img
          src={url}
          key={i}
          className={"w-[700px]  " + (activeIndex === i ? "block": "hidden")}
          alt="Wallpaper"
          
          />
        ))
      }
      <button className=" h-auto border border-slate-600 border-round" onClick={handleNext}>next</button>
      </div>
    </>
  )
}

export default App
