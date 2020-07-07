import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'

import './styles.css'

class MyButton extends React.Component{

    render(){
        return (
            <Container>
                <Row>
                    <Button onClick={() => this.props.saludo(this.props.text) }>
                        {
                            this.props.text
                        }
                    </Button>

                </Row>
                <Row  className={this.props.myClass}>
                    {
                        this.props.cont
                    }
                </Row>
            </Container>    
        )
    }
}

export default MyButton