import ProjectCard from "../../components/ProjectCard"
import "./Home.css"
import bookiLogo from '../../assets/Booki.webp'
import carducciLogo from '../../assets/logo_nina_carducci_projet.webp'
import kasaLogo from '../../assets/logo_kasa.webp'
import sophieBluelImage from '../../assets/image_sophie_bluel.webp'
import logoMvg from '../../assets/logo_mvg.webp'
import logoHomemadeSutom from '../../assets/logo_homemade_sutom.webp'

export default function Home() {
    return (
        <div className="projectsGallery">
            <div className="side_projects">
                <ProjectCard projectName="Homemade Sutom (projet personnel, version de démonstration)" backgroundImgUrl={logoHomemadeSutom} />
            </div>
            <div className="gh_pages_oc_projects">
                <ProjectCard projectUrl="https://fx719.github.io/booki/" projectName="Booki" backgroundImgUrl={bookiLogo} />
                <ProjectCard projectUrl="https://fx719.github.io/Nina-Carducci-Dev-master/" projectName="Nina Carducci" backgroundImgUrl={carducciLogo} />
                <ProjectCard projectUrl="https://github.com/fx719/kasa" projectName="Kasa" backgroundImgUrl={kasaLogo} />
            </div>
            <div className="gh_code_oc_only">
                <ProjectCard projectUrl="https://github.com/fx719/Portfolio-architecte-sophie-bluel/tree/master/FrontEnd" projectName="Sophie Bluel" backgroundImgUrl={sophieBluelImage} />
                <ProjectCard projectUrl="https://github.com/fx719/monVieuxGrimoire-backend" projectName="Mon Vieux Grimoire" backgroundImgUrl={logoMvg} />
            </div>
        </div>
    )
}
