import React from 'react'; 
import {grainLabels} from '../classes/foodLabels_Values'
import '../stylesheets/food_styles.css';


export default class Grains extends React.Component {
    state = {
        type: "bagel_large", 
        quantity: 0, 
        label: grainLabels["bagel_large"],    
    } 

    // assign correct type and label on a change of option value
    changeType = (e) => {
        this.setState({
            type: e.target.value, 
            label: grainLabels[e.target.value]
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
                    <div class="left top text" id="instructions_label">Please enter your Grains...</div>

                    <select id="category_selector" defaultValue={this.state.type} onChange={e => this.changeType(e)} >
                        <option value="bagel_large">Bagel (1 large bagel)</option>
                        <option value="bagel_mini">Bagel (1 mini bagel)</option>
                        <option value="biscuit_large">Biscuit (1 large biscuit)</option>
                        <option value="biscuit_small">Biscuit (1 small biscuit)</option>
                        <option value="bread_loaf">Bread (1 loaf)</option>
                        <option value="bread_slice">Bread (1 regular slice)</option>
                        <option value="rye_loaf">Rye-Bread (1 loaf)</option>
                        <option value="rye_slice">Rye-Bread (1 regular slice)</option>
                        <option value="bulgur">Bulgar (1 cup serving)</option>
                        <option value="cornbread_small">Cornbread (1 small slice)</option>
                        <option value="cornbread_medium">Cornbread (1 medium slice)</option>
                        <option value="cracker_rs">Cracker (round or square) (7 crackers)</option>
                        <option value="cracker_wr">Cracker (whole wheat or rye) (5 crackers)</option>
                        <option value="english muffin">English Muffin (1 english muffin)</option>
                        <option value="large_muffin">Muffin (1 large muffin)</option>
                        <option value="small_muffin">Muffin (1 small muffin)</option>
                        <option value="oatmeal_cups">Oatmeal (1 serving or 1.5 cups)</option>
                        <option value="oatmeal_packet">Oatmeal (1 packet)</option>
                        <option value="pancakes">Pancake (1 pancake)</option>
                        <option value="popcorn">Popcorn (6 cups popped or 100 calorie bag)</option>
                        <option value="ready_breakfast_cereal_cup">Ready-to-eat Breakfast Cereal (1 cup flakes)</option>
                        <option value="ready_breakfast_cereal_box">Ready-to-eat Breakfast Cereal (1 box)</option>
                        <option value="rice">Rice (1 cup raw)</option>
                        <option value="pasta">Pasta (1 cup raw)</option>
                        <option value="pasta_box">Pasta (1 box)</option>
                        <option value="tortillas_flour_large">Tortillas (1 large, flour)</option>
                        <option value="tortillas_flour_small">Tortillas (1 small, flour)</option>
                        <option value="tortillas_flour_corn">Tortillas (1 corn tortilla)</option>
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
                </div>
            </form>
        ); 
    }
}