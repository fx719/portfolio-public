import "./ProjectCard.css"

export default function ProjectCard({ projectUrl, projectName, backgroundImgUrl, projectStack, codeLink }) {

    return (
        <div className="projectCard">
            <div className="project_img"  >
                <a target="_blank" href={projectUrl} style={{ backgroundImage: `url(${backgroundImgUrl})` }}>
                </a>
            </div>
            <div className="project_name_and_stack">
                <h3 className="projectName">{projectName}</h3>
                <div className="stack"><ul>{projectStack.map(tech => <li key={projectStack.indexOf(tech)}>{tech}</li>)}</ul></div>
            </div>
            <div className="github_code_link">
                <a target="_blank" href={codeLink}>Lien vers le code GitHub</a>
            </div>
        </div>
    )
}