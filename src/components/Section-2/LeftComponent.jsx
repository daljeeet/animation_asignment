const LeftComponent = () => {
  return (
    <div className="w-1/2 h-[100vh] flex justify-center items-center sticky top-0">
    <div className="w-4/5 m-auto ">
      <p className="flex items-center text-2xl text-[#A594FD]">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="m-[3px]"
        >
          <path
            d="M8.75348 17.6952C7.72056 14.0706 3.94416 10.3084 0.305928 9.27938C-0.101976 9.14829 -0.101976 8.8599 0.305928 8.72226C3.95074 7.68666 7.72056 3.931 8.76005 0.299863C8.8719 -0.0999545 9.14164 -0.0999545 9.25349 0.299863C10.2864 3.931 14.0628 7.68666 17.6945 8.72226C18.1024 8.85335 18.1024 9.14829 17.6945 9.27938C14.0562 10.3084 10.2798 14.0706 9.24691 17.6952C9.13506 18.1016 8.86532 18.1016 8.75348 17.6952Z"
            fill="#A594FD"
          ></path>
        </svg>
        Workflow
      </p>
      <h3 className="text-7xl font-bold">
        Create at <br /> the speed <br /> of thought.
      </h3>
      <p className="my-6 font-semibold text-gray-300">
        Focus of your getting your thoughts out and creating the best{" "}
        <br />
        message while Chronicle does the heavy lifting for you
      </p>
    </div>
  </div>
  )
}

export default LeftComponent