// eslint-disable-next-line react/prop-types
const EachWrod = ({data,isOpique}) => {
  return (
    <>
        <span className={`text-2xl md:text-6xl font-semibold ${isOpique?"opacity-100":"opacity-20"} `}>
            {data} {" "}
          </span>
    </>
  )
}

export default EachWrod