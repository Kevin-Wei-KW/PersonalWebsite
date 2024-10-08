import React from "react";
import { Link } from 'react-router-dom';

export default function Profile(props) {
    return(
        <div className="Profile">
            <div className="NameInfo">
                <h1>Kevin</h1>
                <h1>Wei</h1>
                <p>
                    Hi there! I am a Software Developer 
                    currently studying Computer Engineering 
                    at the University of Waterloo. 
                </p>
                <p>
                    Feel free to contact me about any inquiries!
                </p>

                <ul>
                    <li><a href="https://github.com/kevin-wei-kw"><i className="fa fa-github"></i></a></li>
                    <li><a href="https://linkedin.com/in/kevin-wei-kw"><i className="fa fa-linkedin-square"></i></a></li>
                </ul>
            </div>

            <div className="About">
                <Link to="/projects" className="quick-link" onClick={()=>document.body.scrollTo(0, 0)}>
                    Check out my Projects &nbsp; <i className="fas fa-arrow-right"></i>
                </Link>
                <Link to="/experience" className="quick-link" onClick={()=>document.body.scrollTo(0, 0)}>
                    Work Experiences &nbsp;  <i className="fas fa-arrow-right"></i>
                </Link>
                <Link to="/resume" className="quick-link" onClick={()=>document.body.scrollTo(0, 0)}>
                    My Resume &nbsp; <i className="fas fa-arrow-right"></i>
                </Link>
                {/* <p style={{textIndent: '30px'}}>
                
                    While I'm not glued to my laptop, I enjoy reading novels
                    accompanied by some soothing music and a hot cup of coffee.
                    Of course, I'm also fond of a good workout to keep a routine.
                </p> */}
            </div>

            {/* <div className="shadow"><img className="FormalPic" src={formalpic} alt="Formal Pic"/></div> */}

            <div className="blank"></div>

        </div>
    )
}