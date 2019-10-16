import React, { Component } from 'react';
import {Row,Col,Container} from 'react-bootstrap';
import TransactionForm from '../Components/TransactionForm'
class HomePage extends Component {
    constructor(props){
        super(props)
        this.state = {
           
        }
    }
    render(){
        return(
            <div>
                <Container>
                <Row>
                    <Col><TransactionForm/></Col>
                    <Col>2 of 2</Col>
                </Row>
                <Row>
                    <Col>1 of 3</Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col>
                </Row>
                </Container>
            </div>
        )
    }


}
export default HomePage;