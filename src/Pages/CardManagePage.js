import React, { Component } from 'react';
import AddCard from '../Components/AddCard'
import Card from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css';
class CardManagePage extends Component {
    constructor(props){
        super(props)
        this.state = {
          number: '',
          name: '',
          expiry: '',
          cvc: '',
          issuer: '',
          focused: '',
          formData: null,
           
        }
       
    }
    
    render(){
        return(
            <div>
                <AddCard/>
                <Card
                name="John Smith"
                number="5555 4444 3333 1111"
                expiry="10/20"
                cvc="737"
              />

            </div>
        )
    }


}

export default CardManagePage;

     
