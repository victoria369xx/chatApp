import { Redirect, Route } from "react-router-dom";

export  function PrivateRoute ({auth, ...rest}){
    return auth ? (
        <Route {...rest}/>
    ) : (
        <Redirect to="/login"/>
    );
}