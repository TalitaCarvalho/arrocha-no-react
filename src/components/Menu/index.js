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
                    <Link className="link" to="/simpsons">Simpsons</Link>
                </li>
                <li>
                    {/* <Link to="TENHO QUE ADICIONAR meu link aqui">AQUI SOU EU QUE VOU ADICONAR</Link> */}
                </li>
            </ul>
        </nav>
    )
}

export default Menu