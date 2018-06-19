import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as gameActions from '../actions/gameActions'


class OptionButton extends React.Component {
    constructor(props){
        super(props);
        this.calcScore = this.calcScore.bind(this);
    }
    calcScore(){
        window.props = this.props;
        this.props.actions.increaseScore(10);
    }

    render(){

        return(
            <button
            onClick={()=>{this.calcScore()}}
            >{`Dip. ${this.props.option.apellido}`}</button>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(Object.assign({}, gameActions), dispatch)
    };
}

function mapStateToProps(state, ownProps) {
    return {
        currentScore: state.score
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(OptionButton);
//export default AnswerContainer;
