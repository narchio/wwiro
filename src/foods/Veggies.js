import React from 'react'; 
import {vegLabels} from '../classes/foodLabels_Values'

export default class Veggies extends React.Component {
    state = {
        type: "broccoli_oz", 
        quantity: 0, 
        label: vegLabels["broccoli_oz"],    
    } 

    // assign correct type and label on a change of option value
    changeType = (e) => {
        this.setState({
            type: e.target.value, 
            label: "How many " + vegLabels[e.target.value] + " do you have?"
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
                    <div class="left top text" id="instructions_label">Please enter your Vegetables...</div>

                    <select id="category_selector" defaultValue={this.state.type} onChange={e => this.changeType(e)} >
                        <option value="broccoli_oz">Broccoli (ounces)</option> 
                        <option value="broccoli_fl">5 inch, Spears of Broccoli (3 spears, raw or cooked)</option>
                        <option value="greens">Greens (ounces)</option>
                        <option value="spinach">Raw Spinach (ounces)</option>
                        <option value="spinach_cooked">Cooked Spinach (ounces)</option>
                        <option value="raw_leafy_greens">Ounces of raw, Leafy Greens (Spinach, romaine, watercress, dark green leafy lettuce, endive, escarole)</option>
                        <option value="carrots">Carrots (ounces)</option>
                        <option value="carrot_med">Medium sized Carrots</option>
                        <option value="carrot_mini">Mini sized Carrots</option>
                        <option value="pumpkin">Pumpkin (ounces)</option>
                        <option value="red_peppers">Red or Green Peppers (ounces)</option>
                        <option value="pepper_large">Large peppers</option>
                        <option value="pepper_sm">Small peppers</option>
                        <option value="tomato_lg">Large tomatoes (raw)</option>
                        <option value="tomato_oz">Ounces of Tomatoes (chopped, sliced, raw, canned or cooked)</option>
                        <option value="tomato_sm">Small Tomatoes (raw)</option>
                        <option value="tomato_juice">Tomatoe juice (ounces) </option>
                        <option value="sweet_potato_lg">Large, Baked Sweet Potatoes</option>
                        <option value="sweet_potato_sliced">Sliced or Mashed, Cooked Sweet Potatoes</option>
                        <option value="winter_squash">Winter Squash (Acorn, Butternut, Hubbard)</option>
                        <option value="acornSquash">Acorn Squashes</option>
                        <option value="dry_beans_n_peas">Dried Beans and Peas (black, garbanzo, pinto, kidney, soy, etc.)</option>
                        <option value="corn">Corn (white or yellow, in ounces)</option>
                        <option value="corn_large">Large Ears of Corn</option>
                        <option value="corn_small">Small Ears of Corn</option>
                        <option value="green_peas">Green Peas (ounces)</option>
                        <option value="white_potatoes">White Potatoes (ounces)</option>
                        <option value="bakedoBoiled_potatoe">Medium Boiled or Baked Potatoe</option>
                        <option value="bean_sprouts">Bean Sprouts (ounces)</option>
                        <option value="cabbage">Cabbage (ounces)</option>
                        <option value="cauliflower">Cauliflower (ounces)</option>
                        <option value="celery">Celery (ounces)</option>
                        <option value="celery_lg">Large Stalks of Celery (11-12 inches)</option>
                        <option value="cucumbers">Cucumbers (ounces)</option>
                        <option value="green_beans">Green or Wax Beans</option>
                        <option value="lettuce">Lettuce (Iceberg or Head)</option>
                        <option value="mushrooms">Mushrooms (ounces)</option>
                        <option value="onions">Unions (ounces)</option>
                        <option value="summer_squash_o_zucchini">Summer Squash or Zucchini (ounces)</option> 
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