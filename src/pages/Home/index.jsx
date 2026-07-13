import ProjectCard from "../../components/ProjectCard"
import bookiLogo from '../../assets/Booki.png'
import "./Home.css"

export default function Home() {
    return (
        <div className="projectsGallery">
            <div className="side_projects">
                <ProjectCard projectName="Homemade Sutom" />
                <ProjectCard projectName="Actu des jeux" />
            </div>
            <div className="gh_pages_oc_projects">
                <ProjectCard projectUrl="https://fx719.github.io/booki/" projectName="Booki" backgroundImgUrl={bookiLogo} />
                <ProjectCard projectUrl="https://fx719.github.io/Nina-Carducci-Dev-master/" projectName="Nina Carducci" />
                <ProjectCard projectUrl="https://github.com/fx719/kasa" projectName="Kasa" />
            </div>
            <div className="gh_code_oc_only">
                <ProjectCard projectUrl="https://github.com/fx719/Portfolio-architecte-sophie-bluel/tree/master/FrontEnd" projectName="Sophie Bluel" />
                <ProjectCard projectUrl="https://github.com/fx719/monVieuxGrimoire-backend" projectName="Mon Vieux Grimoire" />
            </div>
        </div>
    )
}
