import React from 'react';
import App from '../App';
import '../Styles/Card.css';

class Card extends React.Component {
    constructor(props){
        super(props);
        this.state={
            isFlipped: true,  
        };
    }

    pressed=()=> {
        this.setState( prevState =>({isFlipped : !prevState.isFlipped}));
    };
    

    render() {
        if(this.state.isFlipped===false) {
            return (
                <div className="Hidden" onClick={this.pressed}>
                    <p></p>
                </div>
            );
        }
        else {
            return (
                <div className='Actual-Card' onClick={this.pressed}>
                    <p>#{this.props.number}</p>
                </div>
            );
        }
    }
}

export default Card;