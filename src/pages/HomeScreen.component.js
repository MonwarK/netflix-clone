import React from 'react'

import Nav from "../components/Nav/Nav.component"
import "./HomeScreen.styles.css"

import Banner from "../components/Banner/Banner.component"

function HomeScreen() {
    
    return (
        <div className="home-screen">
            {/* Nav */}
            <Nav />      
            <Banner />
        </div>
    )
}

export default HomeScreen
