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
  calcScore(id, feedback) {
    window.props = this.props;
    if (id === this.props.rightOne) {
      this.defineClassNames(feedback);
      setTimeout(this.props.actions.increaseScore(1), 2000);
    } else {
      this.defineClassNames(feedback);
      this.props.actions.wrongScore(1);
    }
  }

  defineClassNames(feedback) {
    for (let i = 0; i < this.props.options.length; i++) {
      feedback[i] =
        this.props.options[i].id === this.props.rightOne ? "right" : "wrong";
    }
  }

  render() {
    let feedback = ["", "", ""];
    let renderOptions = this.props.options.map((item, index) => {
      console.log("---> ITEM:", item);
      return (
        <button
          className={this.props.feedback && this.props.feedback[index]}
          key={item.id}
          onClick={() => {
            this.calcScore(item.id, feedback);
          }}
        >{`Dip. ${item.apellido}`}</button>
      );
    });

    return <div>{renderOptions}</div>;
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
    currentWrong: state.wrongScore
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OptionButton);
//export default AnswerContainer;
