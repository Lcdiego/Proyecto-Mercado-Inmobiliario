import React from 'react';
import { useState } from 'react';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import FormLogin from '../../pages/FormLogin';

const Navbar = () => {
    const [loginVisible, setLoginVisible] = useState(false);

    const toggleLogin = () => {
      setLoginVisible(!loginVisible);
      
    };
    
    
      const [menuVisible, setMenuVisible] = useState(false);
    
      const toggleMenu = () => {
        setMenuVisible(!menuVisible);
      };
    return(
    <div >
             <nav className={`flex justify-between text-white bg-gray-900 bg-opacity-30 w-screen p-4 z-50 fixed ${menuVisible ? 'flex-col' : ''}`}>

<div className="px-5 xl:px-12 py-2 flex w-full items-center">
  <a className="text-3xl font-bold font-heading" href="/">
    <p className="text-orange-500">Mercado</p>
    <p className="h-9 text-orange-500">Inmobiliario</p>
  </a>

  <ul className={`hidden md:flex px-6 mx-auto font-semibold font-heading space-x-12 ${menuVisible ? 'hidden' : 'flex'}`}>
    <li><a className="hover:text-gray-200 sm:text-lg md:text-2x1 lg:text-2x1 xl:text-3x1" href="/CardsPropiedades">Inmuebles</a></li>
    <li><a className="hover:text-gray-200 sm:text-lg md:text-2x1 lg:text-2x1 xl:text-3x1" href="/FormCorretor">Corredores</a></li>
    <li><a className="hover:text-gray-200 sm:text-lg md:text-2x1 lg:text-2x1 xl:text-3x1" href="/FormConstrutora">Constructoras</a></li>
    <li><a className="hover:text-gray-200 sm:text-lg md:text-2x1 lg:text-2x1 xl:text-3x1" href="#">Nosotros</a></li>
    <li><a className="hover:text-gray-200 sm:text-lg md:text-2x1 lg:text-2x1 xl:text-3x1" href="#">Contactos</a></li>
    <li><a className="hover:text-gray-200 sm:text-lg md:text-2x1 lg:text-2x1 xl:text-3x1" href="#">Blog</a></li>
  </ul>

  <div className="hidden xl:flex items-center space-x-5 items-center">
    <a className="hover:text-gray-500 text-orange-500" href="#">
      <FaFacebook size={30} />
    </a>
    <a className="flex items-center hover:text-gray-500 text-orange-500" href="#">
      <FaInstagram size={30} />
    </a>
    <a className="flex items-center hover:text-gray-500 text-orange-500" href="#">
      <BsWhatsapp size={30} />
    </a>
    <a className="flex items-center" onClick={toggleLogin}>
<p className="text-blue-900 text-lg hover:text-orange-500">Iniciar sesión</p>
</a>


  </div>
</div>

<a className="navbar-burger self-center mr-12 xl:hidden" href="#" onClick={toggleMenu}>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-12 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
</a>

<ul className={`md:hidden px-6 mx-auto font-semibold font-heading  ${menuVisible ? 'flex flex-col' : 'hidden'}`} >
  <li><a className="hover:text-gray-200 " href="/CardsPropiedades">Inmuebles</a></li>
  <li><a className="hover:text-gray-200 " href="#">Ver corredores</a></li>
  <li><a className="hover:text-gray-200 " href="#">Ver constructoras</a></li>
  <li><a className="hover:text-gray-200 " href="#">Sobre nosotros</a></li>
  <li><a className="hover:text-gray-200 " href="#">Contactos</a></li>
  <li><a className="hover:text-gray-200 " href="#">Blog</a></li>
</ul>
</nav>
<div>

{loginVisible && <FormLogin />}

</div>
    </div>
   
        
    )
}

export { Navbar }