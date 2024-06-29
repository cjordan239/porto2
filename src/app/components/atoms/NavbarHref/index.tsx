import React from "react";
import Link from "next/link";
import NavLinkProps from "@interface/NavLinkProps";

const NavbarHref = ({ hash, children, className}: NavLinkProps) => {

  return (
    <Link
      className = {className}
      href={hash}>
      <span className={className}>{children}</span>
    </Link>
    )
};

export default NavbarHref;
