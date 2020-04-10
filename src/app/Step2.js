import React, { Component } from "react";
import FormStep2 from '../classes/FormStep2'; 
import history from '../classes/history'; 
import { grainQuantities, vegQuantities, fruitQuantities, dairyQuantities, proteinQuantities } from '../classes/foodLabels_Values'


function howLongWillItLast(grains, veg, fruit, dairy, protein, grainsCount, vegCount, fruitCount, dairyCount, proteinCount) {
    return [{
        daysOfGrains: +(grainsCount / grains), 
        daysOfVeg: +(vegCount / veg), 
        daysOfFruit: +(fruitCount / fruit), 
        daysOfDairy: +(dairyCount / dairy), 
        daysOfProtein: +(proteinCount, protein)
    }]; 
}

export default class Step2 extends React.Component {
    state = {
        foodList: [], 
        grainsCount: 0, 
        vegCount: 0, 
        fruitCount: 0, 
        dairyCount: 0, 
        proteinCount: 0
    }

    onSubmit = (foodList) => {
        var entry = foodList
        var newFields = this.state.foodList; 
        newFields.push(entry); 
        console.log(foodList.type + " quant: ", foodList.quantity); 
        this.setState({ 
            grainsList: newFields, 
         })
         // now set label
        // if grain
        var temp = 0; 
        if (grainQuantities[foodList.type]) {
            temp = this.state.grainsCount + foodList.quantity * grainQuantities[foodList.type]; 
            this.setState({
                grainsCount: temp
            }) 
        } // if veg
        else if (vegQuantities[foodList.type]) {
            temp = this.state.vegCount; 
            this.setState({
                vegCount: temp + foodList.quantity * (+vegQuantities[foodList.type])
            })
        }// if fruit
        else if (fruitQuantities[foodList.type]) {
            temp = this.state.fruitCount; 
            this.setState({
                fruitCount: temp + (+foodList.quantity) * (+fruitQuantities[foodList.type])
            })

        }// if dairy
        else if (dairyQuantities[foodList.type]) {
            temp = this.state.dairyCount; 
            this.setState({
                dairyCount: temp + (+foodList.quantity) * (+dairyQuantities[foodList.type])
            })

        }// if protein
        else if (proteinQuantities[foodList.type]) {
            temp = this.state.proteinCount; 
            this.setState({
                proteinCount: temp + (+foodList.quantity) * (+proteinQuantities[foodList.type])
            })

        }
    } 

    /**
   * Transitions to step 3
   */
  continueToStep3 = (e) => {
    const {famData} = this.props.location; 
    console.log('Family data: ' + famData);
    console.log("grain count: " + this.state.grainsCount); 
    var willItLast = howLongWillItLast(famData[0].grains, famData[0].veg, famData[0].fruit, famData[0].dairy, famData[0].protein, this.state.grainsCount, this.state.vegCount, this.state.fruitCount, this.state.dairyCount, this.state.proteinCount); 
    // go to next page
    history.push({
        pathname: ('/Step3'), 
        willItLast: willItLast
      });   
  }; 
    
    render() {
        return (
            <div className="Step2">
                <FormStep2 onSubmit={foodList => this.onSubmit(foodList)}/>
                <p>{JSON.stringify(this.state.foodList, null, 2)}</p> ---> (grains list) table here
                <p>{JSON.stringify(this.state.foodList, null, 2)}</p> ---> (grains count) count here
                {/* <p>{JSON.stringify(this.props.state.familyMembers[0], null, 5)}</p> ---> table here */}
                <button onClick={e => this.continueToStep3(e)}>Calculate When I Will Run Out of Food!</button>
            </div>
        );
    }
}