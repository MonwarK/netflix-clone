import React, { useRef } from 'react'
import { auth } from '../../firebase/firebase.utils';
import "./SignUp.styles.css"

function SignUp() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(authUser => console.log(authUser))
        .catch((err) => {
            alert(err.message)
        })
    }

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(authUser => console.log(authUser))
        .catch((err) => {
            alert(err.message)
        })
    }

    return (
        <div className="sign-up">
            <form>            
                <h1>Sign In</h1>
                <input type="email" placeholder="Email" ref={emailRef}/>
                <input type="password" placeholder="Password" ref={passwordRef}/>
                <button type="submit" onClick={signIn}>Sign in</button>
                <h4>
                    <span className="sign-up-grey">New to netflix? </span>
                    <span className="sign-up-link" onClick={register}>Sign Up now.</span>
                </h4>
            </form>
        </div>
    )
}

export default SignUp
