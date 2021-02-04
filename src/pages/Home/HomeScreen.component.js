import React from 'react'
import request from "../../Request"

import Nav from "../../components/Nav/Nav.component"
import "./HomeScreen.styles.css"

import Banner from "../../components/Banner/Banner.component"
import Row from "../../components/Row/Row.component"

function HomeScreen() {
    
    return (
        <div className="home-screen">
            <Nav />      
            <Banner />
            <Row 
                title="NETFLIX ORIGINALS"
                fetchUrl={request.fetchNetflixOriginals}
            />
            <Row 
                title="TRENDING"
                fetchUrl={request.fetchTrending}
                isLarge
            />
            <Row 
                title="TOP RATED"
                fetchUrl={request.fetchTopRated}
                isLarge
            />
            <Row 
                title="ACTION MOVIES"
                fetchUrl={request.fetchActionMovies}
                isLarge
            />
            <Row 
                title="COMEDY MOVIES"
                fetchUrl={request.fetchComedyMovies}
                isLarge
            />
            <Row 
                title="HORROR MOVIES"
                fetchUrl={request.fetchHorrorMovies}
                isLarge
            />
            <Row 
                title="ROMANCE MOVIES"
                fetchUrl={request.fetchRomanceMovies}
                isLarge
            />
            <Row 
                title="DOCUMENTARIES"
                fetchUrl={request.fetchDocumentaries}
                isLarge
            />
        </div>
    )
}

export default HomeScreen
