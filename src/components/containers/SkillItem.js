import React from "react";
import { useState } from 'react';

export default function SkillItem(props) {
    const [hover, setHover] = useState(false);

    return(
        <div className="SkillItem">
            <div
                className= { hover && props.children? 'Bar BarExpanded':'Bar' }
                onMouseEnter={ () => setHover(true) }
                onMouseLeave={ () => setHover(false) }>
                <div className="Fill" style={{height: `${100-props.level}%`}}></div>
                <div className="info">{props.children}</div>
            </div>
            <div className="Space"></div>
            <div className="Name">{props.name}</div>

            <div className="tooltip">Placeholder</div>
        </div>

    )
}