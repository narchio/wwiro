import React, { Component } from "react";

export default class StepFinal extends React.Component {
    state = {
        results: this.props.location
    }

    /**
     * Shows the table
     */
    renderTable() {
        console.log(this.state.results.dailyValues[0])
        console.log(this.state.results.dailyValues[0].protein_result)

        return this.state.results.dailyValues.map((val, index) => {
            const { grains_result, veg_result, fruit_result, dairy_result, protein_result } = val
            return (
                <tr key={index}>
                    <td>{grains_result}</td>
                    <td>{veg_result}</td>
                    <td>{fruit_result}</td>
                    <td>{dairy_result}</td>
                    <td>{protein_result}</td>
                </tr>
            )
        })
    }

    /**
     * Shows the table header
     */
    renderTableHeader() {
        // if (this.state.results.dailyValues[0].length > 0) {
            let header = Object.keys(this.state.results.dailyValues[0])
            return header.map((key, index) => {
                return <th key={index}>{key.toUpperCase()}</th>
            })
        //}
    }

    /**
     * Quick loop to get how long your food will last
     */
    calcDaysRemaining() {
        var daysRemaining = 9999999; 
        var values = this.state.results.dailyValues[0]
        for (var key in values) {
            console.log('key is: ' + key + " " + values[key]); 
            daysRemaining = Math.min(daysRemaining, values[key]); 
        }
        return daysRemaining; 
    }


    render() {
        return (
            <form className="Form" id="frame">
                <div class="left top rectangle" id="n1_5"></div>
                <div class="left top text" id="iinventory_label">I-inventory</div>
                <div class="left top text" id="description_label">your daily nutriontal needs - calculated </div>
                <img src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7fad/30b1/f618af4fd21e7dafb37a5539dcb964bb" width="553" height="3" class="left top line" id="n1_12"></img>
                <div class="left top rectangle" id="n3_300">
                    <div class="left top text" id="instructions_label">Please enter your Proteins...</div>
                    <div>
                        <h1 id='table_header'>The below shows how many days of food that you have left (for each category)</h1>
                        <table id='members_table'>
                            <tbody>
                                <tr>{this.renderTableHeader()}</tr>
                                {this.renderTable()}
                            </tbody>
                        </table>
                    <div class="left top text" id="instructions_label">Your food should last you around {this.calcDaysRemaining()} day(s) of fully nutritious meals.</div>                    
                    </div>
                </div>
            </form>
        );
    }
}