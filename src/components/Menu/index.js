import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

const Menu = () => {
    return (
        <nav>
            <ul className="menu">
                <li>
                    <Link className="link" to="/">Home</Link>
                </li>
                <li>
                    <Link className="link" to="/rick-and-morty">Rick & Morty</Link>
                </li>
                <li>
                    <Link className="link" to="/sobre">Sobre</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu