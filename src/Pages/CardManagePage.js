import React, { Component } from 'react';
import AddCard from '../Components/AddCard';
import CardList from '../Components/CardList';
import CardItem from '../Components/CardItem';
import { Container ,Row,Col} from 'react-bootstrap';
class CardManagePage extends Component {
    constructor(props){
        super(props)
        this.state = {
          cards : localStorage.getItem("Cards") ? JSON.parse(localStorage.getItem("Cards")) : [] ,
           
        }
       
    }
    
    render(){
        return(
        
            <Container>
                <Row>
                    <Col>
                        <AddCard/>
                    </Col>
                    <Col>
                        <CardList cards = {this.state.cards}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    </Col>
                </Row>
            </Container>
        )
    }


}
export default CardManagePage;

     
