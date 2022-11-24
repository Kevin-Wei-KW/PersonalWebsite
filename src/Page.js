import React from "react";

import NavBar from "./compoennts/NavBar.js";
import Front from "./compoennts/Front.js";

import "./style.css";

export default function Page() {
    return (
        <div className="MainContent">
            <NavBar/>
            <Front/>
        </div>
    )
}