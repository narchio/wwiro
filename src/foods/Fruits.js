import React from 'react'; 
import {fruitLabels} from '../classes/foodLabels_Values'

export default class Fruits extends React.Component {
    state = {
        type: "apple_small", 
        quantity: 0, 
        label: fruitLabels["apple_small"],    
    } 

    // assign correct type and label on a change of option value
    changeType = (e) => {
        this.setState({
            type: e.target.value, 
            label: fruitLabels[e.target.value]
        }); 
    };

    // change the quantity of the current item
    changeQuantity = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }); 
    };

    // submit the quantities
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);  
        this.setState({
            quantity: 0, 
        }); 
    }

    render() {
        return (
            <form className="Form" id="frame">
                <div class="left top rectangle" id="n1_5"></div>
                <div class="left top text" id="iinventory_label">I-inventory</div>
                <div class="left top text" id="description_label">your daily nutriontal needs - calculated </div>
                <img src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7fad/30b1/f618af4fd21e7dafb37a5539dcb964bb" width="553" height="3" class="left top line" id="n1_12"></img>
                <div class="left top rectangle" id="n3_30">
                    <div class="left top text" id="instructions_label">Please enter your Fruits...</div>

                    <select id="category_selector" defaultValue={this.state.type} onChange={e => this.changeType(e)} >
                        <option value="apple_small">Apple (small)</option>
                        <option value="apple_large">Apple (large)</option>
                        <option value="applesauce_1oz">Apple Sauce (1 oz)</option>
                        <option value="applesauce_snackcup">Apple Sauce Snack Cup (4 oz)</option>
                        <option value="banana_reg">Regular Banana</option>
                        <option value="banana_small">Small Banana</option>
                        <option value="cantaloupe">Cantaloupe</option>
                        <option value="grapes">Grapes (large bunch)</option>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="mixed_fruit">Mixed Fruit (fruit cocktail) 4 oz snack pack</option>
                        <option value="orange">Orange (large)</option>
                        <option value="mandarin_orange">Orange (small or mandarin)</option>
                        <option value="peach_large">Peach (large)</option>
                        <option value="peach_small">Peach (small)</option>
                        <option value="peach_snackcup">Peach Snack Container (4 oz)</option>
                        <option value="pear">Pear</option>
                        <option value="pear_snackcup">Pear Snack Container (4 oz)</option>
                        <option value="pineapple">Pineapple</option>
                        <option value="plum_large">Plum (large)</option>
                        <option value="plum_small">Plum (small)</option>
                        <option value="strawberries">Strawberry</option>
                        <option value="watermelon">Watermelon (20 lbs)</option>
                </select>
                <div class="item Label" id="item_label">{this.state.label}</div>
                <input id="quantity"
                    name="quantity" 
                     placeholder="Quantity" 
                     value={this.state.quantity} 
                    onChange={e => this.changeQuantity(e)}                
                />
                <br />
                <button id="add_button" onClick={e => this.onSubmit(e)}>Add Item</button>
                <br />
                </div>
            </form>
        );
   }
}