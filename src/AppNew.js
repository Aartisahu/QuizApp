import React, { Component } from 'react';
import quizQ from './api/quizQuestions'
import './App.css';

let data = 0;
class AppNew extends Component {
  constructor(){
    super();
    this.state = {
      index: 0,
      answer: [],
      result: 0,
      showResult: false
    } 
  }
  handleClick= (result) => {
    this.setState({
      index: this.state.index + 1,
      answer: [...this.state.answer, result],
      showResult: false
      
    })
  }
  
  handleResult = () => {
    this.state.answer.map(
      answer => {
        data = data + answer
        this.setState({
          showResult: true,
          result: data
         
        });
      }
    )
  }
 
 
  
  render() {
    return (
      <center>
      <div>
        {this.state.index < quizQ.length
        ? <div>
            <div>
              <span>Question {this.state.index+1}</span>
              <p>{quizQ[this.state.index].question}</p>
            </div>
            <div>
              <span>options</span>
              <p>{quizQ[this.state.index].answers.map((data,i)=><button onClick={()=>this.handleClick(data.type)}
                     key={i}>{data.content}</button>)}</p>
            </div>
        </div>
        : !this.state.showResult && <button onClick={this.handleResult}>Result</button>}
        {
          this.state.showResult && <p>your score is {this.state.result}
          </p>
         
        }
       
      </div>
     
      </center>
    )

  }
}

export default AppNew;