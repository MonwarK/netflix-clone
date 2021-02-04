import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from "./pages/Home/HomeScreen.component"
import LoginScreen from "./pages/Login/LoginScreen.component"
import { BrowserRouter, Router, Route, Switch } from "react-router-dom"
import { auth } from './firebase/firebase.utils';

function App() {

  let user = null;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        // Logged in
        user = userAuth;
      } else {
        // Logged out
      }
    })

    return unsubscribe;

  }, [])

  return (
       <div className="app">
          <BrowserRouter>
            {!user ? 
            (<LoginScreen />)             
            :(<Switch>
              <Route path="/" exact>
                <HomeScreen />
              </Route>
            </Switch>
            )
          }
          </BrowserRouter>
      </div> 
  );
}

export default App;
