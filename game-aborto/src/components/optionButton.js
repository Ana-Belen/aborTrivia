import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as gameActions from "../actions/gameActions";

class OptionButton extends React.Component {
  constructor(props) {
    super(props);
    this.calcScore = this.calcScore.bind(this);
    this.defineClassNames = this.defineClassNames.bind(this);
  }
  calcScore(id) {
    window.props = this.props;
    if (id === this.props.rightOne) {
      this.defineClassNames();
      setTimeout(this.props.actions.increaseScore(1), 2000);
    } else {
      this.defineClassNames();
      setTimeout(this.props.actions.wrongScore(1), 2000);
    }
  }

  defineClassNames() {
    for (let i = 0; i < this.props.options.length; i++) {
      this.feedback[i] =
        this.props.options[i].id === this.props.rightOne ? "right" : "wrong";
    }
    this.props.actions.reflectResult(this.feedback);
  }

  render() {
    this.feedback = Array(3);
    let renderOptions = this.props.options.map((item, index) => {
      return <button  className={"button " + this.props.reflectResult[index]} 
                      key={item.id} onClick={() => {
                        this.calcScore(item.id);
                      }}>{`Dip. ${item.apellido}`}
            </button>;
    });

    return <div>{renderOptions}</div>;
  }
}

OptionButton.defaultProps = {
  reflectResult: ['', '', '']
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, gameActions), dispatch)
  };
}

function mapStateToProps(state, ownProps) {
  console.log('state', state);
  return {
    currentScore: state.score,
    currentWrong: state.wrongScore,
    reflectResult: state.answerReducer.reflectResult
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OptionButton);
//export default AnswerContainer;
