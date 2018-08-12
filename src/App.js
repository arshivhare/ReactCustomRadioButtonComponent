import React, { Component } from 'react';
import './App.css';
import RadioButton from './RadioButton';

class App extends Component {
  constructor(props){
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(event){
    const {id,value} = event.target;
    //set the values here
    //TODO
  }

  render() {
    const optionsArray = ['Option 1','Option 2','Option 3','Option 4'];
    return (
      <div className="App">
        <h1> My Radio Button Component </h1>
        <RadioButton id="testval" radioOptions={optionsArray} onClick={this.handleOnClick}/>
      </div>
    );
  }
}

export default App;
