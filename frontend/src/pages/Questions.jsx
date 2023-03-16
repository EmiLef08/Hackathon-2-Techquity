import React from "react";

import "../styles/pages/Questions.scss";

export default function Questions() {
  return (
    <div className="faq-arrows">
      <div className="header-box">
        <label className="headbox-title" htmlFor="acc-close">
          Foire aux questions
        </label>
      </div>
      <input type="radio" name="accordion" id="cb1" />
      <section className="box">
        <label className="box-title" htmlFor="cb1">
          Comment évaluer un téléphone ? 
        </label>
        <label className="box-close" htmlFor="acc-close">
          {}
        </label>
        <div className="box-content">
          Pour évaluer un téléphone portable, à partir du tableau de bord, cliquez sur le bouton jaune ("Insérer les données") et suivez les instructions à l'écran.
        </div>
      </section>
      <input type="radio" name="accordion" id="cb2" />
      <section className="box">
        <label className="box-title" htmlFor="cb2">
          Comment modifier mes coordonnées ? 
        </label>
        <label className="box-close" htmlFor="acc-close">
          {}
        </label>
        <div className="box-content">
          Pour modifier vos coordonnées, allez dans la page de votre compte à partir du bouton en haut à droite de votre écran. La page de votre compte apparaît et dans le bloc à gauche vous pouvez modifier vos coordonnées.
        </div>
      </section>
      <input type="radio" name="accordion" id="cb3" />
      <section className="box">
        <label className="box-title" htmlFor="cb3">
          Puis-je importer un dossier .csv ?
        </label>
        <label className="box-close" htmlFor="acc-close">
          {}
        </label>
        <div className="box-content">
          Oui, il est possible d'importer un fichier au format .csv. A partir de votre tableau de bord, cliquez sur le bouton rouge ("Importer un fichier CSV") et suivez les instructions à votre écran. 
        </div>
      </section>
      <input type="radio" name="accordion" id="cb4" />
      <section className="box">
        <label className="box-title" htmlFor="cb4">
          Je vois des titres d'articles sur mon tableau de bord, comment puis-je y accéder ? 
        </label>
        <label className="box-close" htmlFor="acc-close">
          {}
        </label>
        <div className="box-content">
          Pour accéder aux articles, il suffit de cliquer sur les titres que vous voulez consulter et une nouvelle page s'ouvrira sur l'article choisi. 
        </div>
      </section>
      <input type="radio" name="accordion" id="cb5" />
      <section className="box">
        <label className="box-title" htmlFor="cb5">
          Comment changer mon mot de passe ? 
        </label>
        <label className="box-close" htmlFor="acc-close">
          {}
        </label>
        <div className="box-content">
          Pour changer votre mot de passe, à partir de votre tableau de bord, vous allez sur la page de votre compte à partir du bouton en haut à droite de votre écran. Une fois sur la page de votre compte, vous pouvez modifier votre mot de passe grâce au bloc du milieu. 
        </div>
      </section>
      <input type="radio" name="accordion" id="cb6" />
      <section className="box">
        <label className="box-title" htmlFor="cb6">
          Que sont les chiffres à gauche de mon tableau de bord ? 
        </label>
        <label className="box-close" htmlFor="acc-close">
          {}
        </label>
        <div className="box-content">
          Les chiffres disponibles à gauche de votre tableau de bord, en-dessous de votre avatar, sont les derniers chiffres découlant des actions de Emmaüs Connect. 
        </div>
      </section>
      <input type="radio" name="accordion" id="acc-close" />
    </div>
  );
}
