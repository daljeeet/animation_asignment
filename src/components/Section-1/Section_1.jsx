import { useEffect, useRef, useState } from "react";
import EachWrod from "./SingleWord";
const Section_1 = () => {
    const [value,setValue] = useState()
  const [words, setWords] = useState([]);
  const target = useRef(null);
  useEffect(() => {
      const text = `In Chronicle everything is made with Blocks that come with pixel perfect design, interactivity and motion out of the box. Instead of designing from scratch, simply choose the right one from our library of blocks and see the magic unfold.`;
      setWords(text.split(" "));
    }, []);
    useEffect(() => {
        const handleScroll = () => {
            const parentComp = target.current.getBoundingClientRect();
        if(parentComp.top<=400 && parentComp.bottom>=400){
            const move = (Math.floor((parentComp.bottom/parentComp.height)*100))
            setValue(move)
        }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, [target]);
  return (
    <div className="h-[120vh]" ref={target} >
      <p className='sticky top-[30%] bottom-[10%] left-10 w-4/5' >
        {words.map((word, index) => (
          <EachWrod key={index} data = {word} isOpique={value<100-index+20} />
        ))}
      </p>
    </div>
  );
};
export default Section_1