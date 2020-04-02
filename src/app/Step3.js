import React, { Component } from "react";
import FormStep3 from '../classes/FormStep3'; 

export default class Step3 extends React.Component {

    // state = {
    //     grainsList: [], 
    //     grainsCount: 0
    // }

    // onSubmit = (grainsList) => {
    //     var entry = grainsList
    //     var newFields = this.state.grainsList; 
    //     newFields.push(entry); 
    //     console.log("quant: ", grainsList.quantity); 
    //     console.log("this.state.grainsCount", this.state.grainsCount); 
    //     this.setState({ 
    //         grainsList: newFields, 
    //         grainsCount: (+this.state.grainsCount) + (+grainsList.quantity)
    //      })
    // }; 
    
    render() {
        return (
            <div className="Step3">
                <FormStep3 />
                {/* <FormStep3 onSubmit={grainsList => this.onSubmit(grainsList)}/> */}
                {/* <p>{JSON.stringify(this.state.grainsList, null, 2)}</p> ---> table here
                <p>{JSON.stringify(this.state.grainsCount, null, 2)}</p> ---> count here } */}
                {/* <p>{JSON.stringify(this.props.state.familyMembers[0], null, 5)}</p> ---> table here */}
            </div>
        );
    }
}