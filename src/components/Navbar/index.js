import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'

const Navbar = () =>{
    return(
        <>
            <Nav className="containerFluid">
                <NavLink to='/'>
                    <img src={require('../../img/fdm-logo.png')} className='fdm-logo' alt="Fdm Logo"/>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to='/' activeStyle>
                        Mock
                    </NavLink>
                    <NavLink to='/' activeStyle>
                        Mock
                    </NavLink>
                    <NavLink to='/' activeStyle>
                        Mock
                    </NavLink>
                    <NavBtnLink to='/signin'>Login</NavBtnLink>
                </NavMenu>
                {/*<NavBtn>*/}
                {/*    <NavBtnLink to='/signin'>Login</NavBtnLink>*/}
                {/*</NavBtn>*/}
            </Nav>
        </>
    )
}

export default Navbar;