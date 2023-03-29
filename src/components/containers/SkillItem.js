import React from "react";

export default function SkillItem(props) {
    return(
        <div className="SkillItem">
            <div className="Bar">
                <div className="Fill" style={{height: `${100-props.level}%`}}></div>
                <div className="info">{props.info}</div>
            </div>
            <div className="Space"></div>
            <div className="Name">{props.name}</div>

            <div className="tooltip">Placeholder</div>
        </div>

    )
}