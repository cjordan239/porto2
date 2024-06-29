import React from 'react';
import NavbarHref from '@components/atoms/NavbarHref';
import { links } from '@components/lib/data'


const NavbarList = () => {
  return (
    <>
        {links.map((link, index) => (
            <NavbarHref key={index} hash={link.hash} className='font-bold'>
               {link.name}
            </NavbarHref>
        ))}
    </>
  )
}

export default NavbarList