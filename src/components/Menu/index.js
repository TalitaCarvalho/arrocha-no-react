import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

const Menu = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/simpsons">Simpsons</Link>
                </li>
                <li>
                    {/* <Link to="TENHO QUE ADICIONAR meu link aqui">AQUI SOU EU QUE VOU ADICONAR</Link> */}
                </li>
            </ul>
        </div>
    )
}

export default Menu