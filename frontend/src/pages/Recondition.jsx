import React from "react";

import "../styles/pages/Recondition.scss";

export default function Recondition() {
    return(
        <div className="recon-form">
            <div className="recon-title">Téléphone à reconditionner
            </div>
            <p className="recon-texte">Le téléphone indiqué présente les éléments nécessaire pour être ajouter à la liste des appareils à reconditionner.</p>
            <input className="recon-button" type="button" value="Ajout à la liste de reconditionnement" />
        </div>
    )
}