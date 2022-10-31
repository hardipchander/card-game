import React from 'react';
import '../Styles/Card.css';

class Card extends React.Component {
    constructor(props){
        super(props);
        this.state={
            isFlipped:false  
        };
    }

    render() {
        return (
            <div className='Actual-Card'>
                <p>#{this.props.number}</p>
            </div>
        );
    }
}

export default Card;