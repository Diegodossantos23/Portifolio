import React from 'react'
import {Switch, Route} from 'react-router-dom'
import HomePage from '../screens/HomePage/HomePage' 

const Router = () => {
    return(
        <React.Fragment>
            <Switch>
                <Route exact path={"/"} component={HomePage}/>
            </Switch>
        </React.Fragment>
    )
}

export default Router
