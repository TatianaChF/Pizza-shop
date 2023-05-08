import Header from "../components/Header/Header";
import React from "react";

type ChildrenElement = {
    children: any
}

function MainLayout( { children }: ChildrenElement ) {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">{children}</div>
        </div>
    )
}

export default MainLayout;