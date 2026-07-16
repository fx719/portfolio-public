import "./ProjectCard.css"
import { useRef } from "react"

export default function ProjectCard({ projectUrl, projectName, backgroundImgUrl, projectStack, projectDescription, projectModalPictures, codeLink }) {

    const modalRef = useRef(null)

    const openModal = () => {
        modalRef.current?.showModal()
    }

    const closeModal = () => {
        modalRef.current?.close()
    }

    return (
        <div className="projectCard">
            <div className="project_img"  >
                <a target="_blank" href={projectUrl} style={{ backgroundImage: `url(${backgroundImgUrl})` }} >
                    <span className="sr-only">Visit {projectUrl}</span>
                </a>
            </div>
            <div className="project_name_and_stack">
                <h3 className="projectName">{projectName}</h3>
                <div className="stack"><ul>{projectStack.map(tech => <li key={projectStack.indexOf(tech)}>{tech}</li>)}</ul></div>
            </div>
            <button className="show_modal_button" onClick={openModal} >En savoir plus ...</button>
            <dialog ref={modalRef} className="project_modal" closedby="any" >
                <button className="close_modal_button" onClick={closeModal}>Revenir au portfolio</button>
                <div className="project_description">
                    <p>{projectDescription}</p>
                </div>
                <div className="modal_gallery">
                    {projectModalPictures.map(picturePath => <div className="modal_gallery_img" style={{ backgroundImage: `url(${picturePath})` }} key={projectModalPictures.indexOf(picturePath)}></div>)}

                </div>
            </dialog>

            <div className="github_code_link">
                <a target="_blank" href={codeLink}>Lien vers le code GitHub</a>
            </div>
        </div>
    )
}