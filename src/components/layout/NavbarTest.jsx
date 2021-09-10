import React, {useState} from 'react'
import { Iconlogo, IconLogoMobile, Menu, MenuItem, MenuItemLink, NavbarContainer, NavbarWrapper } from './Navbar.elements'
import ChocoGuz from '../../assets/icons/ChocoGuz.svg';
import { FaBars} from 'react-icons/fa';
import {CgCloseO} from 'react-icons/cg';

const Navbar = () => {

//Menu click useState
const[click, setClick] = useState(false); 

const ChangeClick = () => setClick(!click);
console.log(click);

    return (
        <>
        <NavbarContainer>
            <NavbarWrapper className="wrapper">
                <IconLogoMobile onClick={() => ChangeClick()} className="toggle">
                    {click ? <CgCloseO /> : <FaBars />}
                </IconLogoMobile>
                <Menu className="menu">
                    <MenuItem onClick={() => ChangeClick()} className="home">
                    <MenuItemLink>
                    INICIO
                    </MenuItemLink>
                    </MenuItem>
                    <MenuItem onClick={() => ChangeClick()} className="shop">
                    <MenuItemLink>
                    TIENDA
                    </MenuItemLink>
                    </MenuItem>
                    <MenuItem onClick={() => ChangeClick()} className="cart">
                    <MenuItemLink>
                    CARRITO
                    </MenuItemLink>
                    </MenuItem>
                </Menu>
                <Iconlogo className="logo">
                    <img src={ChocoGuz} alt="logo" />
                </Iconlogo>
            </NavbarWrapper>
        </NavbarContainer>
        </>
    )
}

export default Navbar
