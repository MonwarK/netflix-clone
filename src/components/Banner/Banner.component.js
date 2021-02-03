import React, { useState, useEffect } from 'react'
import "./Banner.styles.css"
import axios from "../../Axios"
import requests from '../../Request'

function Banner() {

    const [movie, setMovie] = useState("")

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )

            console.log(movie)

        }
        fetchData();
    }, [])

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "...": string;
    }

    return (
        <header 
            className="banner" 
            style = {{
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
            }}
        >
            <div className="banner-contents">
                <h1 className="banner-title">{movie?.name || movie?.name || movie?.original_name}</h1>

                <div className="banner-buttons">
                    <button className="banner-button">Play</button>
                    <button className="banner-button">My List</button>
                </div>

                <h1 className="banner-description">
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>

            <div className="banner-fadeBottom" />

        </header>
    )
}

export default Banner
