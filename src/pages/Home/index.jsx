import ProjectCard from "../../components/ProjectCard"
import "./Home.css"

export default function Home() {
    return (
        <div className="projectsGallery">
            <div className="projects-1-2">
                <ProjectCard projectUrl="https://fx719.github.io/booki/" projectName="Booki" />
                <ProjectCard projectUrl="https://github.com/fx719/Portfolio-architecte-sophie-bluel/tree/master/FrontEnd" projectName="Sophie Bluel" />
            </div>
            <div className="projects-sideProject1-sideProject2-5">
                <ProjectCard projectName="Actu des jeux" />
                <ProjectCard projectName="Homemade Sutom" />
                <ProjectCard projectUrl="https://github.com/fx719/kasa" projectName="Kasa" />
            </div>
            <div className="projects-3-4">
                <ProjectCard projectUrl="https://fx719.github.io/Nina-Carducci-Dev-master/" projectName="Nina Carducci" />
                <ProjectCard projectUrl="https://github.com/fx719/monVieuxGrimoire-backend" projectName="Mon Vieux Grimoire" />
            </div>
        </div>
    )
}
