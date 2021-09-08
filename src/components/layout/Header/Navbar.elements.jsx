import styled from 'styled-components'

//Styles container navbar
export const NavbarContainer = styled.div`
width: 100%;
height: 80px;
position: sticky;
top: 0;
z-index: 99;
background-color: #f7f7f7;
`;

export const NavbarWrapper = styled.div`
margin: auto;
width: 100%;
max-width: 1300px;
height: 100%;
align-items: center;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`;

//Making icono for navbar
export const Iconlogo = styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: center;
font-size: 0.2em;
`;

//Making menu for navbar
export const Menu = styled.ul`
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`;
export const MenuItem = styled.li`
height: 100%;
padding: 0.5rem 1.5rem;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
font-family: 'Montserrat', sans-serif;
font-weight: normal;

//Hover menu
&:hover{
    background-color: #eaeaea;
    border-bottom: 2px solid #3d1708;
    transition: 0.4s ease-in;
}
`;

export const MenuItemLink = styled.a`
text-decoration: none;
color: #3d1708;
`;

//Making Mobile mode
export const IconLogoMobile = styled.div`
display: none;

//Media query
@media screen and (max-width: 768px) {
    display: flex;
    color: #3d1708;
    font-size: 2rem;
}
`;

