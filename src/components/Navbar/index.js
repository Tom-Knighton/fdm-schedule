import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'
import {UserService} from '../../lib/UserService'
import Login from "../../pages/login";
import Contact from "../../pages/contact"
import {useNavigate} from 'react-router-dom'

const Navbar = () =>{

    let navigate = useNavigate()

    if (localStorage.getItem('user')){
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
                        <NavLink to='/about' activeStyle>
                            Mock
                        </NavLink>
                        <NavLink to='/contact' activeStyle>
                            Mock
                        </NavLink>



                        <NavBtnLink to='/loggedin' onClick={ () => {localStorage.clear(); navigate('/', {replace:true})}} >Logout</NavBtnLink>
                    </NavMenu>
                    {/*<NavBtn>*/}
                    {/*    <NavBtnLink to='/signin'>Login</NavBtnLink>*/}
                    {/*</NavBtn>*/}
                </Nav>
            </>
        )
    }
    else{
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
                        <NavLink to='/about' activeStyle>
                            Mock
                        </NavLink>
                        <NavLink to='/contact' activeStyle>
                            Mock
                        </NavLink>
                        <NavBtnLink to='/login'>Login</NavBtnLink>
                    </NavMenu>
                    {/*<NavBtn>*/}
                    {/*    <NavBtnLink to='/signin'>Login</NavBtnLink>*/}
                    {/*</NavBtn>*/}
                </Nav>
            </>
        )
    }

}

export default Navbar;