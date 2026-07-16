import "./ProjectCard.css"
import { useRef } from "react"

export default function ProjectCard({ projectUrl, projectName, backgroundImgUrl, projectStack, projectDescription, projectModalPictures, codeLink }) {

    const modalRef = useRef(null)
    const zoomedPictureRef = useRef(null)

    const openModal = () => {
        modalRef.current?.showModal()
    }

    const closeModal = () => {
        modalRef.current?.close()
    }

    const openZoomedPicture = (clickedPictureSrc) => {
        zoomedPictureRef.current?.showModal()
        console.log(zoomedPictureRef.current.lastChild.src)
        zoomedPictureRef.current.lastChild.src = clickedPictureSrc
    }
    const closeZoomedPicture = () => {
        zoomedPictureRef.current?.close()
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
                <div className="stack">{projectStack.map(techIconSrc => <img src={techIconSrc} alt="icone de langage informatique" key={projectStack.indexOf(techIconSrc)} className="tech_icon" />)}</div>
            </div>
            <button className="show_modal_button" onClick={openModal} >En savoir plus ...</button>
            <dialog ref={modalRef} className="project_modal" closedby="any" >
                <button className="close_modal_button" onClick={closeModal}>Revenir au portfolio</button>
                <div className="project_description">
                    <p>{projectDescription}</p>
                </div>
                <div className="modal_gallery">
                    {projectModalPictures.map(picturePath => <img src={picturePath} alt={`screenshot du projet ${projectName}`} className="modal_gallery_img" key={projectModalPictures.indexOf(picturePath)} onClick={(e) => openZoomedPicture(e.currentTarget.src)} />)}
                </div>
            </dialog>
            <dialog className="picture_modal_zoom" ref={zoomedPictureRef} closedby="any">
                <button className="close_modal_button" onClick={closeZoomedPicture}>Revenir au projet</button>
                <img className="zoomed_picture" ></img>
            </dialog>

            <div className="github_code_link">
                <a target="_blank" href={codeLink}>Lien vers le code GitHub</a>
            </div>
        </div>
    )
}