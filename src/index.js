import React, {useEffect} from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

import Page from "./Page.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Root = () => {
    const navigate = useNavigate();
  
    useEffect(() => {
      const redirectPath = new URLSearchParams(window.location.search).get('redirect');
      if (redirectPath) {
        navigate(redirectPath, { replace: true });
      }
    }, [navigate]);
  
    return (
      <Routes>
        <Route path="/" element={<Page page="Profile" />} />
        <Route path="/resume" element={<Page page="Resume" />} />
        <Route path="/projects" element={<Page page="Projects" />} />
        <Route path="/experience" element={<Page page="Experience" />} />
        <Route path="/education" element={<Page page="Education" />} />
        <Route path="/skills" element={<Page page="Skills" />} />
      </Routes>
    );
  };
  

root.render (
    <Router>
        <Root />
    </Router>
)