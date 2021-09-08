import React, {useState} from 'react'
import { Iconlogo, IconLogoMobile, Menu, MenuItem, MenuItemLink, NavbarContainer, NavbarWrapper } from './Navbar.elements'
import ChocoGuz from '../../assets/icons/ChocoGuz.svg';
import { FaBars} from 'react-icons/fa';
import {CgCloseO} from 'react-icons/cg';

const Navbar = () => {

//Menu click useState
const[click, setClick] = useState(false); 

const ChangeClick = () => setClick(!click);

    return (
        <>
        <NavbarContainer>
            <NavbarWrapper>
                <IconLogoMobile onClick={() => ChangeClick()}>
                    {click ? <CgCloseO /> : <FaBars />}
                </IconLogoMobile>
                <Menu click ={click}>
                    <MenuItem onClick={() => ChangeClick()}>
                    <MenuItemLink>
                    INICIO
                    </MenuItemLink>
                    </MenuItem>
                    <MenuItem onClick={() => ChangeClick()}>
                    <MenuItemLink>
                    TIENDA
                    </MenuItemLink>
                    </MenuItem>
                    <MenuItem onClick={() => ChangeClick()}>
                    <MenuItemLink>
                    CARRITO
                    </MenuItemLink>
                    </MenuItem>
                </Menu>
                <Iconlogo>
                    <img src={ChocoGuz} alt="logo" />
                </Iconlogo>
            </NavbarWrapper>
        </NavbarContainer>
        </>
    )
}

export default Navbar
