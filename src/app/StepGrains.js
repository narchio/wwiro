import React, { Component } from "react";
import Grains from '../foods/Grains'; 
import history from '../classes/history'; 
import { grainQuantities} from '../classes/foodLabels_Values'
import '../stylesheets/food_styles.css';


export default class StepGrains extends React.Component {
    state = {
        foodList: [], 
        count: 0, 
    }

    onSubmit = (foodList) => {
        var entry = foodList
        var newFields = this.state.foodList; 
        newFields.push(entry); 
        console.log(foodList.type + " quant: ", foodList.quantity); 
        this.setState({ 
            foodList: newFields, 
            count: this.state.count + foodList.quantity * grainQuantities[foodList.type]
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
    * Transitions to Step Veggies
    */
    continueToVeggies = (e) => {
        const {famData} = this.props.location; 
        let grainData = [{
            grains: famData[0].grains,
            veg: famData[0].veg,
            fruit: famData[0].fruit,
            dairy: famData[0].dairy, 
            protein: famData[0].protein,
            grainsCount: this.state.count
          }]
          console.log('grainData')
          console.log(famData)
          console.log('vegData')
          console.log(grainData);
          console.log("count: " + this.state.count); 
        // go to next page
        history.push({
            pathname: ('/StepVeggies'), 
            data: grainData
        });   
    }; 
    
    render() {
        return (
            <div className="StepGrains" id="frame">
                <Grains onSubmit={foodList => this.onSubmit(foodList)}/>
                <h1 id='table_header'>Grains that you have added</h1>
                <table id='members_table'>
                    <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTable()}
                    </tbody>
                </table>
                <button id="continue_button" onClick={e => this.continueToVeggies(e)}>Continue to Vegetables</button>
        </div> 
        );
    }
}