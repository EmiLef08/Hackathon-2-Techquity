import React from "react";

import "../styles/components/Footer.scss";

export default function Footer() {
    return(
        <div className="foot-contain">
            <div className="foot-copy">
                © EMMAÜS CONNECT
            </div>
            <div className="foot-sites">
                Nos sites : 
                <a href="https://emmaus-connect.org"> EMMAÜS CONNECT</a> - 
                <a href="https://lesrelaisnumeriques.org"> Les Relais Numériques</a> - 
                <a href="https://lacollecte.tech"> LaCollect.tech</a>
            </div>
        </div>
    )
}