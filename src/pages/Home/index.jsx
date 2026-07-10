import ProjectCard from "../../components/ProjectCard"
import "./Home.css"

export default function Home() {
    return (
        <div className="projectsGallery">
            <div className="projects-1-2">
                <ProjectCard projectName="Booki" />
                <ProjectCard projectName="Sophie Bluel" />
            </div>
            <div className="projects-sideProject1-sideProject2-5">
                <ProjectCard projectName="Actu des jeux" />
                <ProjectCard projectName="Homemade Sutom" />
                <ProjectCard projectName="Kasa" />
            </div>
            <div className="projects-3-4">
                <ProjectCard projectName="Nina Carducci" />
                <ProjectCard projectName="Mon Vieux Grimoire" />
            </div>
        </div>
    )
}
