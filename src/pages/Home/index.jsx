import ProjectCard from "../../components/ProjectCard"
import "./Home.css"
import bookiLogo from '../../assets/Booki.webp'
import carducciLogo from '../../assets/nina_carducci_logo.webp'
import kasaLogo from '../../assets/logo_kasa.webp'
import sophieBluelLogo from '../../assets/logo_sophie_bluel.webp'
import logoMvg from '../../assets/logo_mvg.webp'
import logoHomemadeSutom from '../../assets/logo_homemade_sutom.webp'
import stacks from "../../data/stacks.js"
import projectsDescriptions from "../../data/projectsDescriptions.js"

export default function Home() {
    return (
        <div className="projectsGallery">
            <ProjectCard projectUrl="https://fx719.github.io/homemadeSUTOMDemoJS/" projectName="Homemade Sutom (projet personnel)" backgroundImgUrl={logoHomemadeSutom} projectStack={stacks.homemadeSutom} projectDescription={projectsDescriptions.homemadeSutom} codeLink="https://github.com/fx719/homemadeSUTOMDemoJS" />
            <ProjectCard projectUrl="https://fx719.github.io/booki/" projectName="Site statique de location immobilière" backgroundImgUrl={bookiLogo} projectStack={stacks.booki} projectDescription={projectsDescriptions.booki} codeLink="https://github.com/fx719/booki" />
            <ProjectCard projectUrl="https://fx719.github.io/Nina-Carducci-Dev-master/" projectName="Optimisation d'un portfolio" backgroundImgUrl={carducciLogo} projectStack={stacks.ninaCarducci} projectDescription={projectsDescriptions.ninaCarducci} codeLink="https://github.com/fx719/Nina-Carducci-Dev-master" />
            <ProjectCard projectUrl="https://github.com/fx719/kasa" projectName="SPA de location immobilière" backgroundImgUrl={kasaLogo} projectStack={stacks.kasa} projectDescription={projectsDescriptions.kasa} codeLink="https://github.com/fx719/kasa" />
            <ProjectCard projectUrl="https://github.com/fx719/Portfolio-architecte-sophie-bluel/tree/master/FrontEnd" projectName="Page web dynamique d'architecte d'intérieur" backgroundImgUrl={sophieBluelLogo} projectStack={stacks.sophieBluel} projectDescription={projectsDescriptions.sophieBluel} codeLink="https://github.com/fx719/Portfolio-architecte-sophie-bluel/tree/master/FrontEnd" />
            <ProjectCard projectUrl="https://github.com/fx719/monVieuxGrimoire-backend" projectName="Back-end d'un site de notation de livres" backgroundImgUrl={logoMvg} projectStack={stacks.monVieuxGrimoire} projectDescription={projectsDescriptions.monVieuxGrimoire} codeLink="https://github.com/fx719/monVieuxGrimoire-backend" />
        </div>
    )
}
