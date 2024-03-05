import React, { useState , useEffect} from "react"
import { data } from "./data"
function App() {

  const [activeIndex,setActiveIndex] = useState(0);
  
  const handleNext = () =>{
       setActiveIndex((activeIndex+1)%data.length);
  }

  const handlePrev = () =>{
     setActiveIndex(!activeIndex ? data.length : activeIndex-1);
  }
   useEffect(()=>{
     
   setInterval(()=>{
     handleNext();
   },2000)

   return(()=>{
    clearInterval();
   })

   },[activeIndex])

  return (
    <>
      <div className="flex justify-center">

        <button onClick={handlePrev} className="h-[20px] py-[50px] mt-[100px] p-4 font-bold border">prev</button>

        {
          data.map((url,i)=>(
            <img
            src={url}
            key={i}
            className={"w-[500px] " +(activeIndex === i ? "block" : "hidden")}
            alt="Wallpaper"
            />

          ))
        }

        <button onClick={handleNext} className="h-[20px] py-[50px] mt-[100px] p-4 font-bold border">next</button>

      </div>
    </>
  )
}

export default App
