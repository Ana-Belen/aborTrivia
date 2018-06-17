import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as gameActions from '../actions/gameActions.js';

import OptionButton from './optionButton.js';

class AnswerContainer extends React.Component {
    constructor(props){
        super(props);
        this.createArray = this.createArray.bind(this);
        this.randomPlace = this.randomPlace.bind(this);

    }
    randomPlace(max){
        return Math.floor(Math.random() * (max - 0 + 1)) + 0;
    }
    createArray(optLength = 3, rightLocation){
        console.log(rightLocation);
        console.log(this.props.rightAnswer);
        let dipArray = [];
        for(let i=0; i<=optLength; i++){
            if(i === rightLocation){
                dipArray.push(this.props.allAnswers.diputados[this.props.rightAnswer].apellido);
            }else{
                let someIndex = this.randomPlace(this.props.allAnswers.diputados.length);
                //if(this.props.allAnswers.diputados !== )
                dipArray.push('someone');
            }
        }
        return dipArray;
    }


    render(){
        let optLength = 3;
        let rightLocation = this.randomPlace(optLength);
        let dipArray =[];
        
        dipArray = this.createArray(optLength, rightLocation);

        let renderOptions = dipArray.map((item, index) => {
            return(
                <OptionButton key={index} text={`Dip. ${item}`} />
            ) 
        });

        return(
            <div className="options">
                {renderOptions}
            </div>
        );
    }
};

function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(Object.assign({}, gameActions), dispatch)
    };
}

function mapStateToProps(state, ownProps) {
    return {
        currentScore: state.currentScore
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AnswerContainer);
//export default AnswerContainer;
