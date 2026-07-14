import { NavLink } from 'react-router-dom'
import './Header.css'


export default function Header() {
    return (
        <header>
            <div className="header-name">
                <NavLink to="/"><h2>Frédéric Dupont</h2></NavLink>
                <NavLink to="/bio"><p>À propos</p></NavLink>
            </div>
            <div className="header-skills">
                <h2>Développeur web</h2>
                <p>JavaScript / Node.js</p>
            </div>
        </header>
    )
}