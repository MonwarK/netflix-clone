import React, { useState, useEffect }  from 'react'
import { useHistory } from 'react-router-dom'
import "./Nav.styles.css"

function Nav() {

    const [display, setDislay] = useState("")
    const history = useHistory()

    const transitionNavBar = () => {
        if(window.scrollY > 100){
            setDislay(true);
        } else{
            setDislay(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
    }, [])

    return (
        <div className={`nav ${display && "nav-black"}`}>

            <div className="nav-contents">                
                <img 
                    onClick={() => history.push("/")}
                    className="nav-logo"
                    src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                    alt="Netflix Logo" 
                />

                <img 
                    onClick={() => history.push("/profile")}
                    className="nav-avatar"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
                    alt="Profile-avatar"                 
                />
            </div>
        </div>
    )
}

export default Nav
