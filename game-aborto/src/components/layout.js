import React, { Component } from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as gameActions from "../actions/gameActions";

import ScoreContainer from "./scoreContainer.js";
import ErrorContainer from "./errorContainer.js";
import QuestionContainer from "./questionContainer.js";
import AnswerContainer from "./answerContainer.js";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.whichString = this.whichString.bind(this);
  }

  whichString() {
    let max = this.props.frases.length - 1;
    let min = 0;
    let result = Math.floor(Math.random() * (max - min + 1)) + min;

    return result;
  }

  render() {
    return <div className="layout">
        <h1>¿Quién dijo?</h1>
        <div className="scoreContainer">
          <ScoreContainer score={this.props.currentScore} />
          <ErrorContainer score={this.props.wrongScore} />
        </div>
        <div className="questionContainer">
          <QuestionContainer question={this.props.frases[this.whichString()].frase} />
        </div>
        <div className="answerContainer">
          <AnswerContainer rightAnswer={this.props.frases[this.whichString()].interno} allAnswers={this.props.diputados} />
        </div>
      </div>;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, gameActions), dispatch)
  };
}

function mapStateToProps(state, ownProps) {
  return {
    currentScore: state.answerReducer.score,
    wrongScore: state.answerReducer.wrongScore
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
