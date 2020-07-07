import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Title from './Title'
import MyButton from './MyButton'
import Comment from './Comment'

class App extends React.Component{
    constructor(){
        super()
        this.contador = 0
    }

    saludar(name){
        alert('Hola ' + name)
    }

    render(){
        return (
            <Container>
                <Row>
                    <Col>
                        <Title></Title>
                    </Col>
                </Row>
                <Row>
                    <Comment name="Manuel Trujillo" date="7 de Julio" comment="Hola a todos"></Comment>
                </Row>
                <Row>
                    <Comment name="Manuel Trujillo" date="9 de Julio" comment="Hola a todos"></Comment>
                </Row>
                <Row>
                    <MyButton text="Manuel" cont={this.contador} saludo={(name) => this.saludar(name)}></MyButton>
                </Row>
            </Container>
            
        )
    }
}

export default App