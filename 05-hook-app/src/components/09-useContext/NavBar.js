import React from 'react'

import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
        <nav className="navbar navbar-expand-lg navbar-ligth ">
            <div className="container-fluid">    
            <NavLink className='navbar-brand' to="/">useContext</NavLink>            
                <div className="navbar-collapse" >
                        <NavLink end className={({isActive}) => ( isActive ? 'nav-link active' : 'nav-link' ) } to="/">Home</NavLink>
                        <NavLink end className={({isActive}) => ( isActive ? 'nav-link active' : 'nav-link' ) } to="/about">About</NavLink>                       
                        <NavLink end className={({isActive}) => ( isActive ? 'nav-link active' : 'nav-link' ) } to="/login">login</NavLink>

                </div>
            </div>
        </nav>
  )
}
