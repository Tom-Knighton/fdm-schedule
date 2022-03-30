import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';

export const Nav = styled.nav`
    background: #373738;
    height: 80px;
    display: flex;
    justify-content: space-between
    padding: 0.5rem calc((100vw-1000px)/2);
    z-index: 10;
`
export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    
    &:hover{
        color: #15cdfc;
        transition: all 0.2s ease-in-out;
    }
`

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%)
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.div`
    @media screen and (min-width: 1500px) {
        display: flex;
        align-items: center;
        margin-left: 47em;
        gap: 2em;
    }
    
    display: flex;
    align-items: center;
    margin-left: 25em;
    gap: 2em;
    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(Link)`
    border-radius: 60px;
    background: #0291E1;
    padding: 10px 35px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    
    $:hover{
        background: #fff;
    }
`