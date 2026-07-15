import bioProfilePicture from '../../assets/photo_profile_bio.webp'
import './Bio.css'

export default function Bio() {
    return (
        <div className="bio_content">
            <div className="bio_profile_picture">
                <img src={bioProfilePicture} alt="Photo de Frédéric Dupont, développeur web" />
            </div>
            <div className="bio_text">

                <p> Ancien acteur de théâtre, j'ai amorcé ma reconversion en 2023 vers la cybersécurité, où j'ai découvert HTML, CSS, PHP puis JavaScript. C'est là que j'ai réalisé que programmer était une véritable passion. </p>

                <p>Pendant trois ans et demi, j'ai appris en autodidacte (tout en travaillant dans d'autres domaines à côté), développant rigueur et autonomie en surmontant chaque obstacle par la recherche et la réflexion personnelle. </p>

                <p>En décembre 2025, j'ai intégré la formation Développeur Web chez OpenClassrooms, que je finalise actuellement.

                    Je travaille avec JavaScript, Node.js, AdonisJS, React, TypeScript, MySql, avec un intérêt particulier pour le développement backend. </p>

                <p>Mon projet personnel Homemade Sutom illustre mon apprentissage : une application full-stack qui reprend l'application de Jonathan Magano en y ajoutant un mode contre-la-montre où j'ai développé l'architecture backend avec AdonisJS et son moteur de template Edge JS, et du JavaScript Vanilla pour le front-end. </p>

                <p>Sur mon temps libre, j'apprends le C pour approfondir ma compréhension des fondamentaux informatiques. Je m'informe sur l'usage des LLM pour m'aligner aux pratiques actuelles, mais j'attends d'avoir engrangé plus d'expérience avant de réellement adopter la philosophie de Romain Lanz (core member AdonisJS) : "déléguer le clavier, mais pas la réflexion". <br />

                    Je recherche un poste de développeur backend junior, idéalement dans l'écosystème Node.js et AdonisJS, où je pourrai continuer à apprendre et contribuer à des projets techniques. Ma soif d'apprentissage me permettra de m'adapter à d'autres environnements si nécessaire, car ce qui m'anime avant tout, c'est résoudre des problèmes et progresser techniquement chaque jour.</p>

            </div>
        </div>
    )
}