import React, { useEffect } from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { initAuthAction, logOutUserThunk} from './store/user/actions';
import {getIsAuth} from './store/user/selectors';
import {PrivateRoute} from './hocs/PrivateRoute';
import {PublicRoute} from './hocs/PublicRoute';

import Home from './routs/Home/Home';
import Profile from './routs/Profile/Profile';
import Chats from './routs/Chats/Chats';
import Chat from './routs/Chat/Chat';
import TestApi from './routs/TestApi/TestApi';
import LogIn from './routs/LogIn/LogIn';
import SignUp from './routs/SignUp/SignUp';

import {Container, Button, AppBar, Toolbar}  from '@mui/material';



function App() {
  const dispatch = useDispatch();
  const authed = useSelector(getIsAuth);

 
  useEffect(()=> {
    dispatch(initAuthAction);
  });

function logOutHandler () {
  dispatch(logOutUserThunk)
}
  return (
    <Container maxWidth="md">
        <AppBar style={{backgroundColor: "white"}}>
          <Toolbar style={{display: "flex", justifyContent:"space-between"}}>
            <div>
            <Link to="/" style={{marginRight:"20px"}}> Home</Link>
            <Link to="/api" style={{marginRight:"20px"}}>API</Link>
            <Link to="/profile" style={{marginRight:"20px"}}> Profile</Link>
            <Link to="/chats" style={{marginRight:"20px"}}> Chats </Link>
            </div>
            <Button variant="contained" size="medium" onClick={logOutHandler}> Log Out </Button>
            </Toolbar>
        </AppBar>
  
        <Switch>
        
          <PublicRoute auth={authed}  exact path="/" component={Home}/>
          <PublicRoute  auth={authed} exact path ="/login" component={LogIn}/>
          <PublicRoute  auth={authed} exact path ="/signup" component={SignUp}/> 
      

          <PrivateRoute auth={authed} exact path="/profile"><Profile/></PrivateRoute>

          <PrivateRoute auth={authed} path="/chats">
      <Chats>
          <Switch> 
            <PrivateRoute auth={authed} path="/chats/:chatId" component={Chat}/>
            <PrivateRoute auth={authed}>
                <h2> 404 Chat not found</h2>
            </PrivateRoute>
          </Switch>
      </Chats>
      </PrivateRoute>
       

        <PublicRoute auth={authed} path="/api" component={TestApi}/>
    
        <Route>
          <h2> 404 Page not found</h2>
        </Route>

      </Switch>

    </Container>
  );
}

export default App;
