import React from "react"
import "../Styles/Cards.css"
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Navbar from "react-bootstrap/Navbar"

const Cards = () => {

    return (
    <div >
        <Row className="justify-content-md-center ">
            <Col lg ={4} className="cardss">
                <Card className= "Card text-center" border = "dark">
                <Card.Header style={{fontSize: 30}}>Trying Times</Card.Header>
                <Card.Body>
                    <Card.Subtitle> TV Drama </Card.Subtitle>
                    <Card.Text>
                        <p>A ton but not too much text giving a synopsis for the show</p>
                    </Card.Text>
                    <Button>Explore The Characters</Button>
                </Card.Body>
                </Card>
            </Col>
            <Col lg ={4} className="cardss">
                <Card className= "Card text-center" border = "dark">
                <Card.Header style={{fontSize: 30}}>Running Backwards</Card.Header>
                <Card.Body>
                    <Card.Subtitle> Feature Drama </Card.Subtitle>
                    <Card.Text>
                        <p>A ton but not too much text giving a synopsis for the show</p>
                    </Card.Text>
                    <Button>Explore The Characters</Button>
                </Card.Body>
                </Card>
            </Col>
            <Col lg ={4} className="cardss">
                <Card className= "Card text-center" border = "dark">
                <Card.Header style={{fontSize: 30}}>Pull/Sacrifices</Card.Header>
                <Card.Body>
                    <Card.Subtitle> Play Drama </Card.Subtitle>
                    <Card.Text>
                        <p>A ton but not too much text giving a synopsis for the show</p>
                    </Card.Text>
                    <Button>Explore The Characters</Button>
                </Card.Body>
                </Card>
            </Col>
        </Row>
    </div>
    )
}

export default Cards;