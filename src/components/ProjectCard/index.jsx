import "./ProjectCard.css"


export default function ProjectCard({ projectUrl, projectName }) {
    return (
        <a target="_blank" href={projectUrl}>
            <div className="projectCard">
                <h3>{projectName}</h3>
            </div>
        </a>
    )
}