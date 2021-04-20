// SETUP EACH CARD GROUP TO HAVE IT'S OWN ROW AND COL WITH THE PIC AND COL WITH THE CARD

import React from "react"
import "../Styles/TryingCharacters.css"
import Button from "react-bootstrap/Button"
import { useHistory } from "react-router-dom"
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import JPic from "../img/winter-interest-tree.jpeg"

const TryingCharacters = () => {

    const history = useHistory();

    const backHome = (e) => {
        history.push("/")
    }

    return (
    <div >
        <Button
            onClick={(e) => backHome(e)}
        >
            Home
        </Button>
        <h1 style={{fontStyle: "italic", marginBottom: "50px"}}>Trying Times</h1>
        <h3 style={{marginBottom: "50px"}}>Characters</h3>
        <Row className="justify-content-md-center">
            <Col lg={3}>
                <Card.Img 
                    src={JPic} 
                    style={{ 
                        width: "205px",
                        paddingRight: "10x"
                    }}
                />
            </Col>
            <Col lg={9}>
                <Card style={{marginBottom: "30px"}}>
                    <Card.Header>Jaylin</Card.Header>
                    <Card.Body>
                        <Card.Title>Artist, Apathetic</Card.Title>
                        <Card.Text>
                            Character description
                        </Card.Text>
                        <Button variant="primary">Her Page</Button>
                    </Card.Body>
                </Card>
                <Card style={{marginBottom: "30px"}}>
                    <Card.Header>Jesse</Card.Header>
                    <Card.Body>
                        <Card.Title>Teacher, Loveable</Card.Title>
                        <Card.Text>
                            Character description
                        </Card.Text>
                        <Button variant="primary">His Page</Button>
                    </Card.Body>
                </Card>
                <Card style={{marginBottom: "30px"}}>
                    <Card.Header>Olivia</Card.Header>
                    <Card.Body>
                        <Card.Title>Nurse, Kind</Card.Title>
                        <Card.Text>
                            Character description
                        </Card.Text>
                        <Button variant="primary">Her Page</Button>
                    </Card.Body>
                </Card>
                <Card style={{marginBottom: "30px"}}>
                    <Card.Header>Kia</Card.Header>
                    <Card.Body>
                        <Card.Title>Lawyer, Type-A</Card.Title>
                        <Card.Text>
                            Character description
                        </Card.Text>
                        <Button variant="primary">Her Page</Button>
                    </Card.Body>
                </Card>
                <Card style={{marginBottom: "30px"}}>
                    <Card.Header>Sebastian</Card.Header>
                    <Card.Body>
                        <Card.Title>Lawyer, Ass</Card.Title>
                        <Card.Text>
                            Character description
                        </Card.Text>
                        <Button variant="primary">His Page</Button>
                    </Card.Body>
                </Card>
                <Card style={{marginBottom: "30px"}}>
                    <Card.Header>Isaiah</Card.Header>
                    <Card.Body>
                        <Card.Title>Chef, Good-Hearted</Card.Title>
                        <Card.Text>
                            Character description
                        </Card.Text>
                        <Button variant="primary">His Page</Button>
                    </Card.Body>
                </Card>
                <Card >
                    <Card.Header>Batman</Card.Header>
                    <Card.Body>
                        <Card.Title>Student, Wise</Card.Title>
                        <Card.Text>
                            Character description
                        </Card.Text>
                        <Button variant="primary">His Page</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

    </div>
    )
}

export default TryingCharacters;

// ADD BUTTON BACK HOME