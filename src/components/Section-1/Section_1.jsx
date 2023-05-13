import { useEffect, useRef, useState } from "react";
import EachWrod from "./SingleWord";
const Section_1 = () => {
    const [value,setValue] = useState()
  const [words, setWords] = useState([]);
  const tracker = useRef(null);
  useEffect(() => {
      const text = `In Chronicle everything is made with Blocks that come with pixel perfect design, interactivity and motion out of the box. Instead of designing from scratch, simply choose the right one from our library of blocks and see the magic unfold`;
      setWords(text.split(" "));
    }, []);
    useEffect(() => {
      const handleScroll = () => {
        let trackerElem = tracker.current.getBoundingClientRect()
            let movement = ((trackerElem.bottom/window.innerHeight)*100)
            setValue(100-Math.floor(movement))
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, [value]);

  return (
    <div className="h-[200vh] relative md:w-5/6 m-auto" >
      <div className='sticky top-0 left-0 m-auto h-[100vh]'>
        <div className="h-full flex justify-center items-center" >
        <p className="max-w-[1000px] w-full" >
        {words.map((word, index) => (
          <EachWrod key={index} data = {word} notOpique={value>=(index/words.length)*100} />
          ))}
          </p>
          </div>
      </div>
      <div ref={tracker} className="absolute top-[33%] h-[16.56%] w-full bg-transparent"></div>
    </div>
  );
};
export default Section_1