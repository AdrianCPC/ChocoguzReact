import styled from "styled-components";

const media = {
    desktop:'@media(min-width: 1000px)'
}

export const ContentWrap = styled.div`
width: 100%;
border: 1px solid black;
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;

${media.desktop} {
    width: 1000px;
}

h2 { 
font-family:'Montserrat', sans-serif;
font-weight: 600;
font-size: 40px;
align-self: flex-start;
margin-left: 25px;
}

.box-wrap {
    width: 90%;
    border: 1px solid blue;

    ${media.desktop} {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;

    }
    .img {
        width: 100%;
        height: 150px;
        background-color: grey;

        ${media.desktop} {
            width: 48%;
        }
    }
    .content {
        margin-top: 10px;
        width: 100%;
        height: 150px;
        background-color: grey;

        ${media.desktop} {
            margin: 0;
            width: 48%;
        }
    }
}
`;