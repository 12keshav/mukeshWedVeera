import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import RouterService from '../service/RouterService';
import  {RoutesConfig}  from '../Config/RoutesConfig';

import Landing from './Landing/index'


class AppRoutes extends Component{
    render(){
        return(
            <>
                <BrowserRouter ref={RouterService.setBrowserHistoryRef}>
                    <Switch>
                        <Route exact path={RoutesConfig.LANDING} component={Landing} />
                    </Switch>
                </BrowserRouter>
            </>
        )
    }
}
export default AppRoutes;