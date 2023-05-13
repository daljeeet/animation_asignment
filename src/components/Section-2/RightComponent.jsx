import { useEffect, useRef, useState } from "react";
import ProgressBar from "./ProgressBar";
import Cards from "./Cards";

const RightComponent = () => {

  const [progress, setProgress] = useState(0);
  const [count, setCount] = useState(1)
  const parent = useRef(null)
  useEffect(()=>{
    const handleScrollbar = ()=>{
      let parentElem = parent.current.getBoundingClientRect()
      if(parentElem.top<=window.innerHeight&&parentElem.bottom>=window.innerHeight){
        let percentage = Math.floor(((parentElem.bottom-window.innerHeight)/((parentElem.height+window.innerHeight)-window.innerHeight))*100)
        setProgress(100-percentage)
        }
      }
      window.addEventListener("scroll",handleScrollbar)
    },[])
    useEffect(()=>{
      if(progress<33){
        setCount(1)
      }else if(progress>=33&&progress<66){
        setCount(2)
      }else if(progress>=66){
        setCount(3)
      }
    },[progress])
  return (
    <div className="w-1/2 h-[500vh] relative" ref={parent} >
      <div className="h-[100vh] sticky top-0 flex justify-center items-center">
        <Cards count={count} />
        <div className="h-[80%] flex flex-col justify-center items-center">
          <ProgressBar count={count} height={progress} />
        </div>
      </div>
    </div>
  );
};

export default RightComponent;
