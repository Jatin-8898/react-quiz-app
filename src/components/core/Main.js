import React, { Component } from 'react';
import data from '../questions_data/data';
import Popup from './Popup';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nr: 0,
            total: data.length,
            showButton: false,
            questionAnswered: false,
            score: 0,
            question:'Question will be displayed here',
            displayPopup: 'flex'
        }
        this.handleStartQuiz = this.handleStartQuiz.bind(this);
    }

    handleStartQuiz() {
        this.setState({
            displayPopup: 'none',
            nr: 1
        });
    }

  render() {
    return (
      <div className="container">
       <Popup style={{display: this.state.displayPopup}} score={this.state.score} total={this.state.total} startQuiz={this.handleStartQuiz}/>
        <div className="row">
            <div className="col-lg-10 col-lg-offset-1">
                <div id="question">
                    <h4>Question {this.state.nr}/{this.state.total}</h4>
                    <p>{this.state.question}</p>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
export default Main;