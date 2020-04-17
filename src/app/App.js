import React, { Component } from 'react';
import SplitPane from 'react-split-pane'; 
import Pane from 'react-split-pane'; 
// import logo from './logo.svg';
import '../stylesheets/front_page.css';
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
    var entry = new Person(familyMembers.category, familyMembers.age); 
    var newFields = this.state.familyMembers; 
    newFields.push(entry); 
    this.setState({ newFields })
  }; 

  /**
   * Deletes last entry in the list of Family members
   */
  resetFam = (e) => {
    this.state.familyMembers.pop(); 
    var newFamilyMembers = this.state.familyMembers; 
    this.setState({
      familyMembers: newFamilyMembers
    })
  }; 

  /**
   * Transitions to step 2
   */
  continueToStepGrains = (e) => {
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
      pathname: ('/StepGrains'), 
      famData: famData
    });      
  }; 

  /**
   * Shows the table
   */
  renderTable() {
    return this.state.familyMembers.map((member, index) => {
      const {age, category} = member 
      return (
        <tr key={age}>
          <td>{category}</td>
          <td>{age}</td>
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
      let newHeader = header.splice(0, 2); 
      return newHeader.map((key, index) => {
        if (count < 2) {
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
      <div className="App" id="frame">
          <Form id="landing_page" onSubmit={familyMembers => this.onSubmit(familyMembers)}/>
          <h1 id='table_header'>Who you have added</h1>
          <table id='members_table'>
              <tbody>
                <tr>{this.renderTableHeader()}</tr>
                {this.renderTable()}
              </tbody>
          </table>
          <button id="delete_button" onClick={e => this.resetFam(e)}>Delete Last Entry</button> <br /> <br />
          <button id='continue_button' onClick={e => this.continueToStepGrains(e)}>Continue to Next Step</button>
        </div> 
    );
  }
}

export default App;
