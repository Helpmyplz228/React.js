import React from 'react';
import classes from './ActiveQuiz.module.css'
import AnswersList from './AnswersList/AnswersList'

const ActiveQuiz = props => (
    <div className={classes.ActiveQuiz}>
        <p className={classes.Question}>
            <span>
                <strong>{props.AnswerNumber}.</strong>&nbsp;
                {props.question}
            </span>
            <small>{props.AnswerNumber} из { props.quizLength }</small>
        </p>

        <AnswersList 
        answers={props.answers}
        onAnswerClick={props.onAnswerClick}
        />
    </div>
)


export default ActiveQuiz