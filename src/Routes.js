import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'

const Routes = () => {
    return(
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/electron" component={About} />
        </Switch>
    )
}

export default Routes