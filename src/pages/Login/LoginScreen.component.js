import React, { useState } from 'react'
import SignUp from "../SignUp/SignUp.component"
import "./LoginScreen.styles.css"

function LoginScreen() {

    const [signIn, setSignIn] = useState(false)

    const toLogin = () => setSignIn(true)

    return (
        <div className="login-screen">

            <div className="login-background">                                
                <div className="login-gradient">
                    <div className="login-nav">                         
                        <img className="login-logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Netflix"/>            
                        <button className="login-button" onClick={toLogin}>Sign in</button>
                    </div>
                    {
                        signIn ? (
                            <SignUp />
                        ) : 
                        (   
                            <div>                            
                                <div className="login-body">
                                    <h1>Unlimited films, TV programmes and more.</h1>
                                    <h2>Watch anywhere. Cancel at any time.</h2>
                                    <p>Ready to watch? Enter your email to create or restart your membership.</p>                                

                                    <div className="login-form">
                                        <form onSubmit={toLogin}>
                                            <input type="text" placeholder="Email address" />
                                            <button>GET STARTED</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        )
                    }                    

                </div>
                
            </div>            
        </div>
    )
}

export default LoginScreen
