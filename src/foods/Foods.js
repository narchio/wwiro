import React from 'react'; 
import { grainLabels, vegLabels, fruitLabels, dairyLabels, proteinLabels } from '../classes/foodLabels_Values'

export class Grains extends React.Component {
    // state = {
    //     type: "bagel_large", 
    //     quantity: 0, 
    //     label: grainLabels["bagel_large"],    
    // } 

    // // assign correct type and label on a change of option value
    // changeType = (e) => {
    //     this.setState({
    //         type: e.target.value, 
    //         gLabel: grainLabels[e.target.value]
    //     }); 
    // };

    // // change the quantity of the current item
    // changeQuantity = (e) => {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     }); 
    // };

    // // submit the quantities
    // onSubmit = (e) => {
    //     e.preventDefault();
    //     this.props.onSubmit(this.state);  
    //     this.setState({
    //         quantity: 0, 
    //     }); 
    // }

    render() {
        return (
            <form>
                <p>Please enter your grains...</p>               
                <select defaultValue={this.props.type} onChange={e => this.changeType(e)} >
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
                <p>{this.props.gLabel}</p> 
                <input name="quantity" 
                    placeholder="Quantity" 
                    value={this.props.quantity} 
                    onChange={e => this.changeQuantity(e)}                
                />
                <br />
                <button onClick={e => this.onSubmit(e)}>Add Item</button>
            </form>
        ); 
    }
}


export class Veggies extends React.Component {
    render() {
        return (
            <form>
            <p>Please enter your vegetables...</p>               
                <select defaultValue={this.state.type} onChange={e => this.changeType(e)} >
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
                <p>{this.state.vLabel}</p> 
                <input name="quantity" 
                    placeholder="Quantity" 
                    value={this.state.quantity} 
                    onChange={e => this.changeQuantity(e)}                
                />
                <br />
                <button onClick={e => this.onSubmit(e)}>Add Item</button>
                <br />
            </form>
        );
   }
}


export class Fruits extends React.Component {


}


export class Dairy extends React.Component {


}


export class Protein extends React.Component {


}