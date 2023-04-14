import React from 'react'
import "./SectionPresentation.css"
import responsive from "../../assets/img/responsive.png"
import design from "../../assets/img/design.png"
import profil from "../../assets/img/profil.png"
import integration from "../../assets/img/integration.png"
import dev from "../../assets/img/dev.png"
import seo from "../../assets/img/seo.png"

const CardPointFort = (props) => {
  return(
    <>
    <span className="information">
                <h2>{props.title}</h2>
                <img src={design} alt="design" />
                <p>
                  Séduire en offrant à vos visiteurs une navigation et une
                  ergonomie adaptées à leurs habitudes et leurs équipements
                </p>
              </span>
    
    </>
  )
}

const SectionPresentation = ({HandleName}) => {
  return (
    <div id="second-block">
          <div className="milieu-haut-gauche">
            <img src={responsive} alt="responsive" />
          </div>
          <div className="milieu-haut-droit">
            <p className="color-letter first-line">
              Vous êtes à la recherche d'un développeur pour gérer vos projets
              Web ?
            </p>
            <p>
              Je peux renforcer votre équipe autant sur la partie graphique que
              développement
            </p>
            <p>Seriez-vous prêt a me donner ma chance ?</p>
          </div>
          <div className="milieu-gauche">
            <div className="titre-presentation">
              <hr />
              <h2 className="color-letter">Présentation</h2>
              <hr />
            </div>
            <div>
              <div id="presentation">
                <img
                  src={profil}
                  alt="profil"
                  className="profil"
                />

                <span>
                  <p>
                    Vous êtes a la recherche d'une personne compétente pour
                    gérer vos projets web ?
                  </p>

                  <p>
                    Actuellement je suis.. je fais..., actuellement,je suis.. je
                    fais..., actuellement,je suis.. je fais..., actuellement,
                  </p>
                </span>
              </div>
            </div>
            <div id="rubrique">
              <CardPointFort title='Graphisme' img = {design} alt = {'design'} figcaption = {'Séduire en offrant à vos visiteurs une navigation et une ergonomie adaptées à leurs habitudes et leurs équipements'}/>
              <CardPointFort title='Intégration' img = {integration} alt = {'integration'} figcaption = {'Intégration responsive design compatible à tout navigateurs etrespectueux du W3C.'}/>
              <CardPointFort title='Développement' img = {dev} alt = {'dev'} figcaption = {'>Développement parfaitement fonctionnel et sécurisé.'}/>
              <CardPointFort title='Référencement' img = {seo} alt = {'seo'} figcaption = {'Un maximum de trafic pour votre site web.'}/>

              
              
              
              <div className="ghost"></div>
            </div>
          </div>
          <div className="milieu-droit">
            <div className="cadre">
              <div className="quisuisje">
                <h3>Qui suis-je ?</h3>
              </div>
              <p>
                Description en quelques lignes ... <br />
                Description en quelques lignes ... <br />
                Description en quelques lignes ... <br />
              </p>
            </div>
            <div className="cadre">
              <h3>Experience</h3>
              <ul>
                <li>Experience 1 ...</li>
                <li>Experience 2 ...</li>
                <li>Experience 3 ...</li>
              </ul>
            </div>
            <div className="cadre">
              <h3>Contact</h3>
             
                <label for="expediteur">Votre email :</label>
                <br />
                <input
                  type="email"
                  name="expediteur"
                  id="expediteur"
                  title="votre email"
                />
                <br />
                <label for="expediteur">Votre message :</label>
                <br />
                <textarea
                  id="message"
                  name="message"
                  title="votre message"
                ></textarea>
                <br />
                <input type="submit" onClick={()=>HandleName("test")} />
                <br />
             
            </div>
          </div>
          <div className="clear"></div>
        </div>
  )
}

export default SectionPresentation