import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as gameActions from '../actions/gameActions'


class OptionButton extends React.Component {
    constructor(props){
        super(props);
        this.calcScore = this.calcScore.bind(this);
        this.defineClassNames = this.defineClassNames.bind(this);
    }
    calcScore(id){
        window.props = this.props;
        if(id === this.props.rightOne){
            this.defineClassNames();
            setTimeout(
                this.props.actions.increaseScore(10)
            , 2000);
        }else{
            this.defineClassNames();
            this.props.actions.wrongScore(1);
        }

    }

    defineClassNames(){
        this.props.feedback = [];
        for (let i = 0; this.props.options.length ; i++){
            this.props.feedback[i] = (this.props.options[i].id === this.props.rightOne)? 'right' : 'wrong';
        }
    }

    render(){

         let renderOptions = this.props.options.map((item, index) => {
             console.log('---> ITEM:', item);
            return(
                <button
                className={this.props.feedback && this.props.feedback[index]}
                key={item.id}
                onClick={()=>{this.calcScore(item.id)}}
                >{`Dip. ${item.apellido}`}</button>
            ) 
        });

        return(
            <div>
                {renderOptions}
            </div>
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
        currentScore: state.score,
        currentWrong : state.wrongScore
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(OptionButton);
//export default AnswerContainer;
