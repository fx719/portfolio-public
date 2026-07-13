import "./ProjectCard.css"

export default function ProjectCard({ projectUrl, projectName, backgroundImgUrl, projectStack }) {

    return (
        <>
            <a target="_blank" href={projectUrl} className="projectCard" style={{ backgroundImage: `url(${backgroundImgUrl})` }}>
                <div className="project_name_and_stack">
                    <h3 className="projectName">{projectName}</h3>
                    <div className="stack"><ul>{projectStack.map(tech => <li key={projectStack.indexOf(tech)}>{tech}</li>)}</ul></div>
                </div>
                <div className="glass_cover">
                </div>
            </a>
        </>
    )
}