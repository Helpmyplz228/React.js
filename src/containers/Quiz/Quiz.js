import React, {Component} from 'react'
import classes from "./Quiz.module.css"
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {
    state = {
        ActiveQuestion: 0,
        quiz: [
            {
                question: 'Какого цвета небо?',
                rightAnswerId: 2,
                id: 1, 
                answers: [
                {text: 'ченый', id: 1},
                {text: 'синий', id: 2},
                {text: 'красный', id: 3},
                {text: 'зеленый', id: 4},
                ]
            },
            {
                question: 'В каком году основали Санкт-петербург',
                rightAnswerId: 3,
                id: 2, 
                answers: [
                {text: '1700', id: 1},
                {text: '1705', id: 2},
                {text: '1702', id: 3},
                {text: '1703', id: 4},
                ]
            },
            
        ]
    }

    onAnswerClickHendler = answersId => {
        console.log('Answer id: ', answersId)

        this.setState({
            ActiveQuestion: this.state.ActiveQuestion + 1
        })
    }


    render () {
        return (
        <div className={classes.Quiz}>           
            <div className={classes.QuizWrapper}>
            <h1>Ответьте на все вопросы</h1>
                <ActiveQuiz 
                answers={this.state.quiz[this.state.ActiveQuestion].answers}
                question={this.state.quiz[this.state.ActiveQuestion].question}
                onAnswerClick={this.onAnswerClickHendler}
                quizLength={this.state.quiz.length}
                AnswerNumber={this.state.ActiveQuestion + 1}
                />
            </div>
        </div>
        )
    }
}


export default Quiz