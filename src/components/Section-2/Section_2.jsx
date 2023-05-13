// import React from 'react'

import LeftComponent from "./LeftComponent";
import RightComponent from "./RightComponent";

const Section_2 = () => {
  return (
      <div className="md:w-11/12 m-auto md:flex justify-between relative">
        <LeftComponent/>
        <RightComponent/>
      </div>
  );
};
export default Section_2;
