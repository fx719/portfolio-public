import "./ProjectCard.css"


export default function ProjectCard({ projectUrl, projectName, backgroundImgUrl }) {
    return (
        <a target="_blank" href={projectUrl} className="projectCard">
            <div style={{ background: backgroundImgUrl }}>
                <h3>{projectName}</h3>
            </div>
        </a>
    )
}