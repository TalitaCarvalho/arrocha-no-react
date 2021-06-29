import React from 'react'
import Img from "../../assets/good-morning.svg" 

import "./styles.css"

const Banner = () => {
    return (
        <div className="main">
        <div>
            <h1>Meu site divertido</h1>
            <p>Seja bem vinda, tudo aqui ainda é mato :)</p>
        </div>
        <img src={Img} alt='ilustração de bom dia'/>
        </div>
    )
}
export default Banner