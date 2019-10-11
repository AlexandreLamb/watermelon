import React, { Component } from 'react';
import AddCard from '../Components/AddCard'
import Card from 'react-credit-cards';
class CardManagePage extends Component {
    constructor(props){
        super(props)
        this.state = {
          
           
        }
       
    }
    
    render(){
        return(
            <div>
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

     
