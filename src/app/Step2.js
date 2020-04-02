import React, { Component } from "react";
import FormStep2 from '../classes/FormStep2'; 
import history from '../classes/history'; 

export default class Step2 extends React.Component {

    state = {
        grainsList: [], 
        grainsCount: 0
    }

    onSubmit = (grainsList) => {
        var entry = grainsList
        var newFields = this.state.grainsList; 
        newFields.push(entry); 
        console.log("quant: ", grainsList.quantity); 
        console.log("this.state.grainsCount", this.state.grainsCount); 
        this.setState({ 
            grainsList: newFields, 
            grainsCount: (+this.state.grainsCount) + (+grainsList.quantity)
         })
    }; 

    /**
   * Transitions to step 3
   */
  continueToStep3 = (e) => {
    // go to next page
    history.push('/Step3'); 
  }; 
    
    render() {
        return (
            <div className="Step2">
                <FormStep2 onSubmit={grainsList => this.onSubmit(grainsList)}/>
                <p>{JSON.stringify(this.state.grainsList, null, 2)}</p> ---> table here
                <p>{JSON.stringify(this.state.grainsCount, null, 2)}</p> ---> count here
                {/* <p>{JSON.stringify(this.props.state.familyMembers[0], null, 5)}</p> ---> table here */}
                <button onClick={e => this.continueToStep3(e)}>Calculate When I Will Run Out of Food!</button>
            </div>
        );
    }
}