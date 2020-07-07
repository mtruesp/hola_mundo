import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import './styles.css'

class Title extends React.Component{
    render(){
        return (
            <Container>
                <Row>
                    <Col sm="2" className="title">Hola Mundo</Col>
                </Row>
            </Container>
        )
    }
}

export default Title