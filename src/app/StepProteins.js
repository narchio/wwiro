import React, { Component } from "react";
import Proteins from '../foods/Proteins'; 
import history from '../classes/history'; 
import {proteinQuantities} from '../classes/foodLabels_Values'

function howLongWillItLast(grains, veg, fruit, dairy, protein, grainsCount, vegCount, fruitCount, dairyCount, proteinCount) {
    console.log("protein: " + protein + " proteinCount: " + proteinCount); 
    var daysOfGrains = grainsCount / grains;  
    var daysOfVeg = vegCount / veg;  
    var daysOfFruit = fruitCount / fruit;  
    var daysOfDairy = dairyCount / dairy;  
    var daysOfProtein = proteinCount / protein; 
    return [{
        daysOfGrains: daysOfGrains, 
        daysOfVeg: daysOfVeg, 
        daysOfFruit: daysOfFruit, 
        daysOfDairy: daysOfDairy, 
        daysOfProtein: daysOfProtein
    }]; 
  }

export default class StepProteins extends React.Component {
    state = {
        foodList: [], 
        count: 0
    }
    /**
     * when submitted, entry is added to list of entries and count is incremented
     */
    onSubmit = (foodList) => {
        var entry = foodList
        var newFields = this.state.foodList; 
        newFields.push(entry); 
        console.log(foodList.type + " quant: ", foodList.quantity); 
        this.setState({ 
            foodList: newFields, 
            count: this.state.count + foodList.quantity * proteinQuantities[foodList.type]
         })
    }

    /**
     * Shows the table
     */
    renderTable() {
        return this.state.foodList.map((item, index) => {
        const {quantity, type} = item 
        return (
            <tr key={type}>
            <td>{type}</td>
            <td>{quantity}</td>
            </tr>
        )
        })
    }

    /**
     * Shows the table header
     */
    renderTableHeader() {
        if (this.state.foodList.length > 0) {
        let header = Object.keys(this.state.foodList[0])
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
    * Transitions to Final step
    */
   continueToFinalStep= (e) => {
        const {data} = this.props.location; 
        console.log("protein count: " + this.state.count); 
        
        let wwiro = [{
            grains_result: Math.round(data[0].grainsCount / data[0].grains), 
            veg_result: Math.round(data[0].vegCount / data[0].veg), 
            fruit_result: Math.round(data[0].fruitCount / data[0].fruit), 
            dairy_result: Math.round(data[0].dairyCount / data[0].dairy), 
            protein_result: Math.round(this.state.count / data[0].protein)
        }]; 

        console.log('dairydata')
        console.log(data)
        console.log("wwiro : ")
        console.log(wwiro)
        // go to next page
        history.push({
            pathname: ('/StepFinal'), 
            dailyValues: wwiro
        });   
    }; 
    
    render() {
        return (
            <div className="StepProteins" id="frame">
                <Proteins onSubmit={foodList => this.onSubmit(foodList)}/>
                <h1 id='table_header'>Proteins that you have added</h1>
                <table id='members_table'>
                    <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTable()}
                    </tbody>
                </table>
                <button id="continue_button" onClick={e => this.continueToFinalStep(e)}>Calculate My Results!</button>
            </div> 
        );
    }
}