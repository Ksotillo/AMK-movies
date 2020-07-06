import React, { Suspense } from "react";
import { Grid } from "react-flexbox-grid";
import { Switch, Redirect, Route } from "react-router-dom";
import routes from "../routes/routes";

const Content = () => {

    return (
        <main className='main'>
            <Grid fluid>
                <Suspense fallback={<div>loading</div>}>
                    <Switch>
                        {/* <Route component={() => <div className='animated fadeIn'>Hola jaja</div>}/> */}
                        {routes.map((route, idx) => {
                        return route.component && (
                            <Route
                            key={idx}
                            path={route.path}
                            exact={route.exact}
                            render={props => (
                                <div className='animated fadeIn'>
                                    <route.component {...props} />
                                </div>
                            )} />
                        )
                        })}
                        {/* <Redirect from="/" to="/dashboard" /> */}
                    </Switch>
                </Suspense>
            </Grid>
        </main>
    )
}

export default React.memo(Content);