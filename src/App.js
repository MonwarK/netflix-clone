import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from "./pages/Home/HomeScreen.component"
import LoginScreen from "./pages/Login/LoginScreen.component"
import ProfileScreen from "./pages/Profile/Profile.component"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { auth } from './firebase/firebase.utils';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';

function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect(
    () => {    
      const unsubscribe = auth.onAuthStateChanged((userAuth) => {
        if(userAuth){
          // Logged in        
          dispatch(
            login({
              uid: userAuth.uid,
              email: userAuth.email,
            })
          );
        } else {
          // Logged out
          dispatch(logout())
        }
      });

    return unsubscribe;

  }, [dispatch])

  return (
       <div className="app">
          <BrowserRouter>          
            <Switch>

              {!user ? 
                (<Route path="/" exact component={LoginScreen} />)             
                :(
                  <div>
                    <Route path="/" exact component={HomeScreen} />
                    <Route path="/profile" exact component={ProfileScreen} />
                  </div>                    
                )
              }

              </Switch>
          </BrowserRouter>
      </div> 
  );
}

export default App;
