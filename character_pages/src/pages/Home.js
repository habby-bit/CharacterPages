import React from "react"
import "../Styles/Home.css"
import Cards from "../components/Cards"

const Home = () => {

    return (
    <div >
        <h1 
            style={{textDecoration: "underline", color: "#FFC30F"}}
        >
            Shows
        </h1>
        <Cards />
    </div>
    )
}

export default Home;