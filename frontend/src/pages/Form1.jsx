import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/pages/Form1.scss";

export default function Form1() {
  const [brandValue, setBrandValue] = useState("");
  const [modelValue, setModelValue] = useState("");
  const [conditionValue, setConditionValue] = useState("");
  const [redirectRoute, setRedirectRoute] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (conditionValue === "bon") {
      setRedirectRoute("/formulaire2");
    } else if (conditionValue === "reparable") {
      setRedirectRoute("/reparation");
    } else {
      setRedirectRoute("/recyclage");
    }
  };

  if (redirectRoute) navigate(redirectRoute);

  return (
    <>
      <div className="container1">
        <div className="card-container1">
          <form className="form1" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Marque"
              id="marque"
              onChange={(e) => setBrandValue(e.target.value)}
            />
            <input
              type="text"
              placeholder="Modèle"
              id="text"
              onChange={(e) => setModelValue(e.target.value)}
            />
            <input type="text" placeholder="Ram (2GO min)" id="ram" />
            <input type="text" placeholder="Mémoire (16GO min)" id="ram" />
            <input
              type="text"
              placeholder="État bon, reparable, à recycler"
              id="etat"
              onChange={(e) => setConditionValue(e.target.value)}
            />
            <div className="checkbox-equipement">
              <input type="checkbox" id="checkbox" />
              <p>Chargeur et cable</p>
            </div>
            <button type="submit">Envoyer</button>
          </form>
        </div>
        {modelValue !== "" && (
          <div>
            <iframe
              title="Geekbench"
              src={`https://www.phonescoop.com/search/jump_search.php?q=${brandValue} ${modelValue}`}
              sandbox="allow-same-origin allow-scripts"
              width="200%"
              height="460px"
            />
          </div>
        )}
      </div>
    </>
  );
}