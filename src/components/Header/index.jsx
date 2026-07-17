import { NavLink } from 'react-router-dom'
import './Header.css'


export default function Header() {
    return (
        <header>
            <div className="header-name">
                <NavLink to="/"><h2>Frédéric Dupont (acceuil)</h2></NavLink>
                <NavLink to="/bio"><p>À propos</p></NavLink>
                <a target="_blank" href="https://www.linkedin.com/in/fredericdupont75/" id='linkedin'>Contact</a>
            </div>
            <div className="header-skills">
                <h2>Développeur web</h2>
                <p>JavaScript / Node.js</p>
            </div>
        </header>
    )
}