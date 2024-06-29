import React from "react";
import HeaderProps from "@interface/HeaderProps";

const Header = ({ children }: HeaderProps) => {
  return (
    <>
      <h2 className="text-3xl font-bold text-center text-gray-800 my-4">
        {children}
      </h2>
    </>
  );
};

export default Header;
