import React from 'react'; 
import {dairyLabels} from '../classes/foodLabels_Values'

export default class Dairy extends React.Component {
    state = {
        type: "milk_gallon", 
        quantity: 0, 
        label: dairyLabels["milk_gallon"],    
    } 

    // assign correct type and label on a change of option value
    changeType = (e) => {
        this.setState({
            type: e.target.value, 
            label: "How many " + dairyLabels[e.target.value] + " do you have?"
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
                    <div class="left top text" id="instructions_label">Please enter your Dairy products...</div>

                    <select id="category_selector" defaultValue={this.state.type} onChange={e => this.changeType(e)} >
                        <option value="milk_gallon">Milk (gallon)</option>
                        <option value="milk_half_gallon">Milk (half gallon)</option>
                        <option value="milk">Milk (ounces)</option>
                        <option value="milk_half_pint">Milk (half-pint)</option>
                        <option value="milk_evap_large">Evaporated Milk (large container)</option>
                        <option value="milk_evap_small">Evaporated Milk (small container)</option>
                        <option value="yogurt">Yogurt (ounces)</option>
                        <option value="yogurt_regularContainer">Yogurt (regular container 8 oz)</option>
                        <option value="yogurt_smallContainer">Yogurt (small container 6 oz)</option>
                        <option value="yogurtSnackSize">Yogurt (snack size container 4 oz)</option>
                        <option value="hard_cheese">Hard Cheese (1 and 1/2 oz of cheddar, mozzarella, swiss, parmesan)</option>
                        <option value="slice_hard_cheese">Hard Cheese (slice)</option>
                        <option value="shredded_cheese">Shredded Cheese (ounces)</option>
                        <option value="processed_cheese">Processed Cheese (ounces)</option>
                        <option value="slice_processed">Processed Cheese (slice)</option>
                        <option value="ricotta">Ricotta Cheese (ounces)</option>
                        <option value="cottage_cheese">Cottage Cheese (cups)</option>
                        <option value="pudding">Milk made Pudding (ounces)</option>
                        <option value="froyo_carton">Frozen Yogurt Carton (48 oz)</option>
                        <option value="froyo">Frozen Yogurt (ounces)</option>
                        <option value="icecream_carton">Ice Cream Carton (48 oz)</option>
                        <option value="icecream">Ice Cream (ounces)</option>
                        <option value="icecream_scoop">Ice Cream Scoop (1 scoop)</option>
                        <option value="soymilk_calc">Soymilk (calcium-fortified, ounces)</option>
                        <option value="soymilk_halfpint">Soymilk (calcium-fortified, half-pint)</option>
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