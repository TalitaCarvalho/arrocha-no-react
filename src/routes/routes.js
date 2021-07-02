import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Persons from '../pages/Persons'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Sobre from '../pages/Sobre/index'

const Routes = () => {
    return (
        <BrowserRouter>
            <Menu />

            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/rick-and-morty' component={Persons} />
                <Route exact path='/sobre' component={Sobre} />
            </Switch>

            <Footer />
        </BrowserRouter>
    )
}

export default Routes