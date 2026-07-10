import "./ProjectCard.css"


export default function ProjectCard({ projectName }) {
    return (
        <div className="projectCard">
            <h3>{projectName}</h3>
        </div>
    )
}