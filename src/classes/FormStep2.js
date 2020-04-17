import React from 'react'; 
import { grainLabels, vegLabels, fruitLabels, dairyLabels, proteinLabels } from './foodLabels_Values'
import {Grains} from '../foods/Foods'; 

export default class FormStep2 extends React.Component {
    state = {
        type: "bagel_large", 
        quantity: 0, 
        gLabel: grainLabels["bagel_large"], 
        vLabel: vegLabels["broccoli_oz"], 
        fLabel: fruitLabels["apple_small"], 
        dLabel: dairyLabels["milk_gallon"], 
        pLabel: proteinLabels["meat_lean_un"]
    } 

    // assign correct type and label on a change of option value
    changeType = (e) => {
        this.setState({
            type: e.target.value, 
        }); 
        // now set label
        // if grain
        if (grainLabels[e.target.value]) {
            this.setState({
                gLabel: grainLabels[e.target.value]
            }); 
        } // if veg
        else if (vegLabels[e.target.value]) {
            this.setState({
                vLabel: vegLabels[e.target.value]
            });
        }// if fruit
        else if (fruitLabels[e.target.value]) {
            this.setState({
                fLabel: fruitLabels[e.target.value]
            });

        }// if dairy
        else if (dairyLabels[e.target.value]) {
            this.setState({
                dLabel: "How many " + dairyLabels[e.target.value] + " do you have?"
            });

        }// if protein
        else if (proteinLabels[e.target.value]) {
            this.setState({
                pLabel: proteinLabels[e.target.value]
            });

        }
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
            <Grains />

            <form>
                <p>Please enter your grains...</p>               
                <select defaultValue={this.state.type} onChange={e => this.changeType(e)} >
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
                <p>{this.state.gLabel}</p> 
                <input name="quantity" 
                    placeholder="Quantity" 
                    value={this.state.quantity} 
                    onChange={e => this.changeQuantity(e)}                
                />
                <br />
                <button onClick={e => this.onSubmit(e)}>Add Item</button>
                <br />
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
                <p>Please enter your fruits...</p>               
                <select defaultValue={this.state.type} onChange={e => this.changeType(e)} >
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
                <p>{this.state.fLabel}</p> 
                <input name="quantity" 
                    placeholder="Quantity" 
                    value={this.state.quantity} 
                    onChange={e => this.changeQuantity(e)}                
                />
                <br />
                <button onClick={e => this.onSubmit(e)}>Add Item</button>
                <br />
                <p>Please enter your dairy products...</p>               
                <select defaultValue={this.state.type} onChange={e => this.changeType(e)} >
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
                <p>{this.state.dLabel}</p> 
                <input name="quantity" 
                    placeholder="Quantity" 
                    value={this.state.quantity} 
                    onChange={e => this.changeQuantity(e)}                
                />
                <br />
                <button onClick={e => this.onSubmit(e)}>Add Item</button>
                <br />
                <p>Please enter your proteins...</p>               
                <select defaultValue={this.state.type} onChange={e => this.changeType(e)} >
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
                <p>{this.state.pLabel}</p> 
                <input name="quantity" 
                    placeholder="Quantity" 
                    value={this.state.quantity} 
                    onChange={e => this.changeQuantity(e)}                
                />
                <br />
                <button onClick={e => this.onSubmit(e)}>Add Item</button>
            </form>

        ); 
    }
}