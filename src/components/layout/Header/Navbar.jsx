import React from 'react'
import { Iconlogo, IconLogoMobile, Menu, MenuItem, MenuItemLink, NavbarContainer, NavbarWrapper } from './Navbar.elements'
import ChocoGuz from '../../../assets/icons/ChocoGuz.svg'
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
    return (
        <>
        <NavbarContainer>
            <NavbarWrapper>
                <Iconlogo>
                    <img src={ChocoGuz} alt="logo" />
                </Iconlogo>
                <IconLogoMobile>
                    <FaBars />
                </IconLogoMobile>
                <Menu>
                    <MenuItem>
                    <MenuItemLink>
                    INICIO
                    </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                    <MenuItemLink>
                    TIENDA
                    </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                    <MenuItemLink>
                    CARRITO
                    </MenuItemLink>
                    </MenuItem>
                </Menu>
            </NavbarWrapper>
        </NavbarContainer>
        </>
    )
}

export default Navbar
