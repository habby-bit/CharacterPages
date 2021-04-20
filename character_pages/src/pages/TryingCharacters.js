import React from "react"
import "../Styles/TryingCharacters.css"
import Button from "react-bootstrap/Button"
import { useHistory } from "react-router-dom"

const TryingCharacters = () => {

    const history = useHistory();

    const backHome = (e) => {
        history.push("/")
    }

    return (
    <div >
        <h1>TRYING CHARACTERS</h1>
        <Button
            onClick={(e) => backHome(e)}
        >
            Home
        </Button>
    </div>
    )
}

export default TryingCharacters;

// ADD BUTTON BACK HOME