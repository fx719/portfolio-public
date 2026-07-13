import ProjectCard from "../../components/ProjectCard"
import "./Home.css"
import bookiLogo from '../../assets/Booki.webp'
import carducciLogo from '../../assets/nina_carducci_logo.webp'
import kasaLogo from '../../assets/logo_kasa.webp'
import sophieBluelLogo from '../../assets/logo_sophie_bluel.webp'
import logoMvg from '../../assets/logo_mvg.webp'
import logoHomemadeSutom from '../../assets/logo_homemade_sutom.webp'
import stacks from "../../data/stacks.js"

export default function Home() {
    return (
        <div className="projectsGallery">
            <div className="side_projects">
                <ProjectCard projectName="Homemade Sutom (projet personnel, démo)" backgroundImgUrl={logoHomemadeSutom} projectStack={stacks.homemadeSutom} />
            </div>
            <div className="gh_pages_oc_projects">
                <ProjectCard projectUrl="https://fx719.github.io/booki/" projectName="Site statique de location immobilière" backgroundImgUrl={bookiLogo} projectStack={stacks.booki} codeLink="https://github.com/fx719/booki" />
                <ProjectCard projectUrl="https://fx719.github.io/Nina-Carducci-Dev-master/" projectName="Optimisation d'un portfolio" backgroundImgUrl={carducciLogo} projectStack={stacks.ninaCarducci} codeLink="https://github.com/fx719/Nina-Carducci-Dev-master" />
                <ProjectCard projectUrl="https://github.com/fx719/kasa" projectName="SPA de location immobilière" backgroundImgUrl={kasaLogo} projectStack={stacks.kasa} codeLink="https://github.com/fx719/kasa" />
            </div>
            <div className="gh_code_oc_only">
                <ProjectCard projectUrl="https://github.com/fx719/Portfolio-architecte-sophie-bluel/tree/master/FrontEnd" projectName="Page web dynamique d'architecte d'intérieur" backgroundImgUrl={sophieBluelLogo} projectStack={stacks.sophieBluel} codeLink="https://github.com/fx719/Portfolio-architecte-sophie-bluel" />
                <ProjectCard projectUrl="https://github.com/fx719/monVieuxGrimoire-backend" projectName="Back-end d'un site de notation de livres" backgroundImgUrl={logoMvg} projectStack={stacks.monVieuxGrimoire} codeLink="https://github.com/fx719/monVieuxGrimoire-backend" />
            </div>
        </div>
    )
}
