import "./ProjectCard.css"


export default function ProjectCard({ projectUrl, projectName, backgroundImgUrl }) {
    return (
        <a target="_blank" href={projectUrl} className="projectCard" style={{ backgroundImage: `url(${backgroundImgUrl})` }}>

            <h3 className="projectName">{projectName}</h3>

        </a>
    )
}