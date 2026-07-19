import "./ProjectCard.css"
import { useRef } from "react"

export default function ProjectCard({ projectUrl, projectName, backgroundImgUrl, projectStack, projectDescription, projectModalPictures, codeLink }) {

    const modalRef = useRef(null)
    const zoomedPictureRef = useRef(null)



    let focusableElements = []



    const getFocusableElements = (modal) => {
        const focusableSelector = "button, img"
        focusableElements = Array.from(modal.querySelectorAll(focusableSelector))
        return focusableElements
    }





    const openModal = () => {
        modalRef.current?.showModal()
        getFocusableElements(modalRef.current)
    }

    const closeModal = () => {
        modalRef.current?.close()
    }

    const openZoomedPicture = (clickedPictureSrc) => {
        zoomedPictureRef.current?.showModal()
        getFocusableElements(zoomedPictureRef.current)
        zoomedPictureRef.current.lastChild.src = clickedPictureSrc
    }

    const closeZoomedPicture = () => {
        zoomedPictureRef.current?.close()
        modalRef.current?.showModal()
    }


    return (
        <div className="projectCard">
            <div className="project_img"  >
                <a target="_blank" href={projectUrl} style={{ backgroundImage: `url(${backgroundImgUrl})` }} aria-label={`Visiter la page du projet : ${projectName}`} >
                    <img src={backgroundImgUrl} alt={`Aperçu du projet ${projectName}`} className="sr-only" />
                    <span className="sr-only">Visit {projectUrl}</span>
                </a>
            </div>
            <div className="project_name_and_stack">
                <h3 className="projectName">{projectName}</h3>
                <div className="stack" aria-label={`Icones de technologies utilisées sur : ${projectName}`} >{projectStack.map(techIconSrc => <img src={techIconSrc} alt="" role="presentation" aria-hidden="true" key={projectStack.indexOf(techIconSrc)} className="tech_icon" />)}</div>
            </div>
            <button className="show_modal_button" onClick={openModal} >En savoir plus ...</button>
            <dialog ref={modalRef} className="project_modal" closedby="any" onKeyDown={(e) => {
                if (e.key !== "Tab") return
                e.preventDefault()

                let index = focusableElements.findIndex(f => f === modalRef.current.querySelector(":focus"))
                getFocusableElements(modalRef.current)
                if (e.shiftKey === true) {
                    index--

                } else {
                    index++

                }
                if (index >= focusableElements.length) {
                    index = 0

                }
                if (index < 0) {
                    index = focusableElements.length - 1

                }

                focusableElements[index].focus()
            }} >
                <button className="close_modal_button" onClick={closeModal}  >Revenir au portfolio</button>
                <div className="project_description">
                    <p>{projectDescription}</p>
                </div>
                <div className="modal_gallery">
                    {projectModalPictures.map(picturePath => <img src={picturePath} alt={`screenshot du projet ${projectName}`} className="modal_gallery_img" key={projectModalPictures.indexOf(picturePath)} onClick={(e) => openZoomedPicture(e.currentTarget.src)} tabIndex={0} onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === ' ') {
                            e.preventDefault()
                            openZoomedPicture(e.currentTarget.src)
                        }
                    }} />)}
                </div>
            </dialog>
            <dialog className="picture_modal_zoom" ref={zoomedPictureRef} closedby="any" onKeyDown={(e) => {
                if (e.key !== "Tab") return
                e.preventDefault()

                let index = focusableElements.findIndex(f => f === zoomedPictureRef.current.querySelector(":focus"))
                getFocusableElements(zoomedPictureRef.current)
                if (e.shiftKey === true) {
                    index--

                } else {
                    index++

                }
                if (index >= focusableElements.length) {
                    index = 0

                }
                if (index < 0) {
                    index = focusableElements.length - 1

                }

                focusableElements[index].focus()
            }}>
                <button className="close_modal_button" onClick={closeZoomedPicture}>Revenir au projet</button>
                <img className="zoomed_picture" ></img>
            </dialog>

            <div className="github_code_link">
                <a target="_blank" href={codeLink}>Lien vers le code GitHub</a>
            </div>
        </div>
    )
}