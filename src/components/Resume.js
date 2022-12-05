import React from "react";

import resumePDF from "../images/Coop_Resume(O).pdf"

export default function Resume() {
    return(
        <div className="Resume">
            <iframe src={resumePDF}></iframe>

        </div>
    )
}