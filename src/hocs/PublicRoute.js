import { Redirect, Route } from "react-router-dom";


export function PublicRoute ({auth, ...rest}) {
    return !auth ? <Route {...rest}/> : <Redirect to="/profile"/>
}