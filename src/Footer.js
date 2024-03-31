import React from "react";

function Footer() {
    return(
        <footer className="d-flex flex-column justify-content-between align-items-center foot">
            <img className="foot-img" src={require("./images/logo-lab.jpg")} draggable="false"/>
            <p className="text-light">   Brand Name © 2023 - Www.brandname.Org</p>
        </footer>
    )
}

export default Footer