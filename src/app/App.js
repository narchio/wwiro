import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Form from "../classes/Form"; 
import Person from "../classes/Person"; 
import history from '../classes/history'; 
// https://www.choosemyplate.gov/eathealthy/grains

function countFoods(familyMembers, num) {
  var i;  
  var count = 0
  for (i = 0; i < familyMembers.length; i++) {
    if (num === 0) {
      count += familyMembers[i].grain; 
    } else if (num === 1) {
      count += familyMembers[i].veg; 
    } else if (num === 2) {
      count += familyMembers[i].fruit; 
    } else if (num === 3) {
      count += familyMembers[i].dairy; 
    } else if (num === 4) {
      count += familyMembers[i].protein; 
    }
  }
  return +count; 
}

class App extends Component { 
  state = {
    familyMembers: []
  }

  /**
   * onSubmit adds a new Person entry to the family members list
   */
  onSubmit = (familyMembers) => {
    var entry = new Person(familyMembers.firstName, familyMembers.category, familyMembers.age); 
    var newFields = this.state.familyMembers; 
    newFields.push(entry); 
    this.setState({ newFields })
  }; 

  /**
   * Resets list of Family members
   */
  resetFam = (e) => {
    this.setState({
      familyMembers: []
    })
  }; 

  /**
   * Transitions to step 2
   */
  continueToStep2 = (e) => {
    let famData = [{
      grains: countFoods(this.state.familyMembers, 0),  
      veg: countFoods(this.state.familyMembers, 1), 
      fruit: countFoods(this.state.familyMembers, 2), 
      dairy: countFoods(this.state.familyMembers, 3), 
      protein: countFoods(this.state.familyMembers, 4)
    }]
    console.log(famData); 
    // go to next page
    history.push({
      pathname: ('/Step2'), 
      famData: famData
    });      
  }; 

  /**
   * Shows the table
   */
  renderTable() {
    return this.state.familyMembers.map((member, index) => {
      const { firstName, age, category} = member 
      return (
        <tr key={firstName}>
          <td>{firstName}</td>
          <td>{age}</td>
          <td>{category}</td>
        </tr>
      )
    })
  }

  /**
   * Shows the table header
   */
  renderTableHeader() {
    if (this.state.familyMembers.length > 0) {
      let header = Object.keys(this.state.familyMembers[0])
      var count = 0; 
      let newHeader = header.splice(0, 3); 
      return newHeader.map((key, index) => {
        if (count < 3) {
          return <th key={index}>{key.toUpperCase()}</th>
        }
        count++; 
      })
    }
  }

  /**
   * Runs the main App
   */
  render() {
    return (
      <div className="App">
        <Form onSubmit={familyMembers => this.onSubmit(familyMembers)}/>
        <button onClick={e => this.resetFam(e)}>reset</button> <br /> <br />
        {/* <p>{JSON.stringify(this.state.familyMembers, null, 5)}</p> ---> table here */}
        <div>
            <h1 id='title'>Your Family Members</h1>
            <table id='familyMembers'>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTable()}
               </tbody>
            </table>
          </div>
          <button onClick={e => this.continueToStep2(e)}>Continue to Step 2</button>
        </div>
    );
  }
}

export default App;
