import React, {StrictMode} from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Page from "./Page.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render (
    <Router>
        <Routes>
            <Route path="/" element={<Page page="Profile" />} />
            <Route path="/resume" element={<Page page="Resume" />} />
            <Route path="/projects" element={<Page page="Projects" />} />
            <Route path="/experience" element={<Page page="Experience" />} />
            <Route path="/education" element={<Page page="Education" />} />
            <Route path="/skills" element={<Page page="Skills" />} />
        </Routes>
    </Router>
)