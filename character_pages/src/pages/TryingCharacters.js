import React from "react"
import "../Styles/TryingCharacters.css"
import Button from "react-bootstrap/Button"
import { useHistory } from "react-router-dom"
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const TryingCharacters = () => {

    const history = useHistory();

    const backHome = (e) => {
        history.push("/")
    }

    return (
    <div >
        <h1 style={{fontStyle: "italic"}}>Trying Times</h1>
        <p>Jaylin, Isaiah, Batman, Kia, Derek, Sebastian</p>
        <Button
            onClick={(e) => backHome(e)}
        >
            Home
        </Button>

        <Row className="justify-content-md-center">
            <Col lg={10}>
                <Card>
                    <Card.Header>Featured</Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </div>
    )
}

export default TryingCharacters;

// ADD BUTTON BACK HOME