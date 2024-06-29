"use client";
import React from "react";
import Logo from "@components/atoms/Logo";
import NavbarList from "@components/molecules/NavbarList";
import MainButton from "@components/atoms/MainButton";
import logo from 'public/images/logo.png'


const Navbar = () => {
  const handleClick = () => {
    alert("lanjut ke register");
  };
  
  return (
    <nav className="z-10 bg-white pt-4 pb-4 flex flex-row items-center justify-evenly text-center w-full shadow-md">
      <div>
        <Logo src={logo} width={50} height={25} alt="foto logo" />
      </div>
      <div className="flex gap-5">
        <NavbarList />
      </div>
      <div className="justify-end">
        <MainButton onClick={handleClick}>Register</MainButton>
      </div>
    </nav>
  );
};

export default Navbar;
