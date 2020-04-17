import React, { Component } from "react";
import Veggies from '../foods/Veggies'; 
import history from '../classes/history'; 
import {vegQuantities} from '../classes/foodLabels_Values'

export default class StepVeggies extends React.Component {
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
            count: this.state.count + foodList.quantity * vegQuantities[foodList.type]
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
    * Transitions to Fruits
    */
    continueToFruits= (e) => {
        const {data} = this.props.location; 
        let vegData = [{
            grains: data[0].grains,
            veg: data[0].veg,
            fruit: data[0].fruit,
            dairy: data[0].dairy, 
            protein: data[0].protein,
            grainsCount: data[0].grainsCount,
            vegCount: this.state.count
          }]
        console.log('grainData')
        console.log(data)
        console.log('vegData')
        console.log(vegData);
        console.log("count: " + this.state.count); 
        // go to next page
        history.push({
            pathname: ('/StepFruits'), 
            data: vegData
        });   
    }; 
    
    render() {
        return (
            <div className="StepVeggies" id="frame">
                <Veggies onSubmit={foodList => this.onSubmit(foodList)}/>
                <h1 id='table_header'>Vegetables that you have added</h1>
                <table id='members_table'>
                    <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTable()}
                    </tbody>
                </table>
                <button id="continue_button" onClick={e => this.continueToFruits(e)}>Continue to Fruits</button>
        </div> 
        );
    }
}