import React from "react";

import NavBar from "./components/NavBar.js";
import Front from "./components/Front.js";

import "./style.css";

export default function Page() {
    return (
        <div className="MainContent">
            <NavBar/>
            <Front/>
        </div>
    )
}