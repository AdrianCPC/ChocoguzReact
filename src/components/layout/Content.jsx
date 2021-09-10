import React from "react";
import { ContentWrap } from "./ContentStyle";

const Content = () => {
    return (
        <>
        <ContentWrap>
            <h2>Bienvenido a ChocoGuz</h2>
            <div className="box-wrap">
                <div className="img"></div>
                <div className="content"></div>
            </div>
        </ContentWrap>
        </>
    );
};

export default Content;
