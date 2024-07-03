import React from "react";

export default function ProjectBox(props) {
    return(
        // <div className="SkillItem">
        //     <div className="Bar">
        //         <div className="Fill" style={{height: `${100-props.level}%`}}></div>
        //     </div>
        //     <div className="Space"></div>
        //     <div className="Name">{props.name}</div>
        // </div>

<div className="ProjectContainer">
    <a id={props.id} style={{position: 'relative', top:'-100px'}}></a>

    <h1>
        <a href={props.link}>
            {props.title} <i className="fa fa-github"></i>
        </a>
    </h1>

    <h4>Technologies: {props.techs} </h4>

    <div className="ProjectInfo">

        <div className="bullets">{props.children}</div>

        {props.import !== '' &&
            <img src={props.import} alt={`${props.alt}`}/>
        }
    </div>
</div>

    )
}