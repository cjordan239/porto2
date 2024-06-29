import React from "react";
import SubHeaderProps from "@interface/SubHeaderProps";
const SubHeader = ({children}: SubHeaderProps) => {
  return (
    <>
      <p className="text-lg text-center text-gray-600 mt-2 mb-8">
        {children}
      </p>
    </>
  );
};

export default SubHeader;
