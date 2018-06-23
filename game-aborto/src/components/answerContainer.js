import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as gameActions from '../actions/gameActions.js';

import OptionButton from './optionButton.js';

class AnswerContainer extends React.Component {
    constructor(props){
        super(props);
        this.createArray = this.createArray.bind(this);
        this.randomInRange = this.randomInRange.bind(this);
        this.getOtherOptions = this.getOtherOptions.bind(this);
    }
    
    randomInRange(max){
        return Math.floor(Math.random() * (max - 0 + 1)) + 0;
    }

    getOtherOptions(list, current){
        //1- Get a random position in the users list
        let index = this.randomInRange(list.length -1);
        let success = false;
        
        for(let i; success !== true; i++){
            //2- Check if that is not a match with a user that is already in the array.
            success = true;
            for(let user of current){
                // 2a If I find the user in the list of buttons, then I didn't succeed. 
                if(user === list[index]){
                    success = false;
                }
            }

            //2b - If the user I got is a new one. Return and break out of the loop.
            if(success === true){
                console.log('---> in return statement', list, index);
                return list[index];
                break;
            }else{
            //2c - The user was already in the list. Fetch a new random object and start this for loop again.
                index = this.randomInRange(list.length - 1);
            }
            
        }
    }

    createArray(optLength = 3, rightLocation){
        let dipArray = [];
        let allDip = this.props.allAnswers.diputados;
        let someIndex;
        for(let i=0; i<=optLength; i++){
            //I've defined beforehand in which button the right option will be. 
            //That's rightLocation. 
            //If I'm in that button, find the user that match that ID.
            if(i === rightLocation){
                let rightAnswer = allDip.filter(el => el.id === this.props.rightAnswer);
                console.log('---> rightAnswer[0]', rightAnswer[0]);
                dipArray.push(rightAnswer[0]);
            }else{
            //If I'm in another button,populate the data with a random user. 
                let someoneElse = this.getOtherOptions(allDip, dipArray);
                console.log('---> someoneElse', someoneElse);
                dipArray.push(someoneElse);
            }
        }
        console.log('---> dipArray', dipArray);
        return dipArray;
    }


    render(){
        let optLength = 2;
        let rightLocation = this.randomInRange(optLength);
        let dipArray =[];
        
        dipArray = this.createArray(optLength, rightLocation); 

        return(
            <div className="options">
                <OptionButton
                    options={dipArray}
                    rightOne={this.props.rightAnswer}
                ></OptionButton>
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
        currentScore: state.score,
        wrongScore: state.wrongScore
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AnswerContainer);

