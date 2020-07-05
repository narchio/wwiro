import React from 'react'; 
import {proteinLabels} from '../classes/foodLabels_Values'

export default class Proteins extends React.Component {
    state = {
        type: "meat_lean_un", 
        quantity: 0, 
        label: proteinLabels["meat_lean_un"],    
    } 

    // assign correct type and label on a change of option value
    changeType = (e) => {
        this.setState({
            type: e.target.value, 
            label: "How many " + proteinLabels[e.target.value] + " do you have?"
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
                    <div class="left top text" id="instructions_label">Please enter your Proteins...</div>

                    <select id="category_selector" defaultValue={this.state.type} onChange={e => this.changeType(e)} >
                        <option value="meat_lean_un">uncooked Lean Meats (pork, ham, beef, lamb, etc.) in ounces"</option> 
                        <option value="meat_lean_cooked">cooked Lean Meats (pork, ham, beef, lamb, etc.) in ounces</option>  
                        <option value="small_steak">small steaks (4 oz)</option> 
                        <option value="chicken_turkey_un">uncooked Chicken or Turkey (without skin) in ounces</option> 
                        <option value="chicken_turkey_cooked">cooked Chicken or Turkey (without skin) in ounces</option>  
                        <option value="slice_turkey">sandwich slices of Turkey (1 slice)</option>  
                        <option value="chick_breast">uncooked Chicken Breasts (4 oz)</option> 
                        <option value="chick_breast_small_cooked">small cooked Chicken Breasts</option> 
                        <option value="half_cornHen">cooked Cornish Game Hens</option>  
                        <option value="whole_cornHen">whole Cornish Game Hens</option> 
                        <option value="uncooked_fish">uncooked Fish or Shell Fish (ounces)</option>  
                        <option value="cooked_fish">cooked Fish or Shell Fish (ounces)</option> 
                        <option value="tuna">cans of tuna, drained (can)</option> 
                        <option value="salmon_steaks">Salmon steaks</option> 
                        <option value="small_trout">small Trout</option>  
                        <option value="eggs">eggs</option> 
                        <option value="eggWhites">3 egg whites</option>  
                        <option value="eggYolks">3 egg yolks</option> 
                        <option value="nuts">nuts (ounces)</option> 
                        <option value="almonds">almonds (in portions of 12)</option> 
                        <option value="pistachios">pistachios (in portions of 24)</option> 
                        <option value="walnut">walnut halves (in portions of 7)</option> 
                        <option value="seeds">seeds (ounces)</option>  
                        <option value="tb_peanut">table spoons/half ounces of Peanut Butter or Almond Butter</option>  
                        <option value="peanut_small">Peanut Butter (16 oz jar)</option> 
                        <option value="peanut_large">Peanut Butter (40 oz jar)</option> 
                        <option value="beans_oz">Beans (black, kidney, pinto, or white beans) in ounces</option> 
                        <option value="cooked_peas">Cooked Peas (chickpeas, cowpeas, lentils, or split peas) in ounces</option> 
                        <option value="baked_beans">Baked beans or Refried beans (ounces)</option> 
                        <option value="tofu">Tofu(s) (ounces)</option>  
                        <option value="tempeh">Tempeh(s), cooked (ounces)</option> 
                        <option value="soybeans">roasted soybeans (ounces)</option> 
                        <option value="falafel">Falafel patties (4 oz)</option>  
                        <option value="hummus_oz">hummus(es) (ounces)</option> 
                        <option value="hummus_container">hummus containers (10 oz)</option>  
                        <option value="beans_can">can of Beans (14 oz)</option> 
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
