import React from "react";
import LogoProps from "@/app/components/interface/LogoProps";
import Image from "next/image";

const Logo = ({ src, alt, width, height }: LogoProps) => {
  return ( 
  <Image 
  src={src} 
  alt={alt}
  width={width}
  height={height} />
)
};

export default Logo;
