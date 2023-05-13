// eslint-disable-next-line react/prop-types
const EachWrod = ({data,notOpique}) => {
  return (
    <>
        <span className={`text-[3rem] md:text-6xl font-semibold ${notOpique?"opacity-100 animate-fadeIn":"opacity-20 "}`}>
          {data} {" "}
          </span>
    </>
  )
}

export default EachWrod