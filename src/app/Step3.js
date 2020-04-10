import React, { Component } from "react";
import FormStep3 from '../classes/FormStep3';

export default class Step3 extends React.Component {
    state = {
        dailyValues: this.props.location
    }

    // /**
    //  * Shows the table
    //  */
    // renderTable() {
    //     return this.state.dailyValues.map((val, index) => {
    //         const { grains, veg, fruit, dairy, protein } = val
    //         return (
    //             <tr key={grains}>
    //                 <td>{grains}</td>
    //                 <td>{veg}</td>
    //                 <td>{fruit}</td>
    //                 <td>{dairy}</td>
    //                 <td>{protein}</td>
    //             </tr>
    //         )
    //     })
    // }

    // /**
    //  * Shows the table header
    //  */
    // renderTableHeader() {
    //     if (this.state.dailyValues.length > 0) {
    //         let header = Object.keys(this.state.dailyValues[0])
    //         return header.map((key, index) => {
    //             return <th key={index}>{key.toUpperCase()}</th>
    //         })
    //     }
    // }

    render() {
        return (
            <div className="Step3">
                {/* <FormStep3 /> */}
                <p>{JSON.stringify(this.props.location, null, 2)}</p> ---> table here

                {/* <div>
                    <h1 id='title'>You have...</h1>
                    <table id='dailyValues'>
                        <tbody>
                            <tr>{this.renderTableHeader()}</tr>
                            {this.renderTable()}
                        </tbody>
                    </table>
                </div> */}
            </div>
        );
    }
}