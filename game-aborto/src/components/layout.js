import React, { Component } from 'react';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import QuestionContainer from './questionContainer.js';
import AnswerContainer from './answerContainer.js';

const Layout = props => {
    let whichString = function(){
        let max = props.frases.length-1;
        let min = 0;

        let result = Math.floor(Math.random() * (max - min + 1)) + min;

        return result;
    };
    return(
      <div className="layout">
        <div className="scoreContainer">
        </div>
        <div className="questionContainer">
            <QuestionContainer
                question = {props.frases[whichString()].frase}
            >
            </QuestionContainer>
        </div>
        <div className="answerContainer">
            <AnswerContainer
                rightAnswer = {props.frases[whichString()].interno}
                allAnswers = {props.diputados}
            >
            </AnswerContainer>
        </div>
      </div>
    );
};

export default Layout;
//export default Layout;
