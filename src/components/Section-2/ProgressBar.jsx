// eslint-disable-next-line react/prop-types
const ProgressBar = ({height,count}) => {
  
  return (
    <>
    <p className="mb-4 text-gray-600 text-sm font-semibold">0{count}</p>
        <div className="bg-[#232323] h-[80%] w-[5px] rounded-full overflow-hidden relative">
          <div style={{height:`${height}%`}} className={`bg-[#A594FD] rounded-full ease-in-out`}></div>
        </div>
          <p className="mt-4 text-[#232323] text-gray-600 text-sm font-semibold">03</p>
        </>
  )
}

export default ProgressBar