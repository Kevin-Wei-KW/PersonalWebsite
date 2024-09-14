import React from "react";

import resumePDF from "../images/Kevin_Wei_SWE_Resume.pdf"

export default function Resume() {
    return(
        <div className="Resume">
            <iframe src={resumePDF} title="Resume"></iframe>

        </div>
    )
}