import React from 'react'; 

export default class FormStep2 extends React.Component {
    state = {
        type: "", 
        quantity: 0
    } 

    changeType = (e) => {
        this.setState({
            type: e.target.value
        }); 
    }; 

    changeQuantity = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }); 
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);  
        this.setState({
            type: "", 
            quantity: 0
        }); 
    }

    render() {
        return (
            <form>
                <p>Please enter your grains...</p>               
                <select defaultValue={this.state.type} onChange={e => this.changeType(e)} >
                    <option value="bagel">Bagels (1 large bagel)</option>
                    <option value="biscuit">Biscuit (1 large biscuit)</option>
                    <option value="bread">Bread (2 regular slices)</option>
                    <option value="bulgur">Bulgar (1 cup)</option>
                    <option value="cornbread">Cornbread (1 medium sized piece)</option>
                    <option value="cracker">Cracker (7 crackers)</option>
                    <option value="english muffin">English Muffin (1 english muffin)</option>
                    <option value="muffin">Muffin (1 large muffin)</option>
                    <option value="oatmeal">Oatmeal (1 packet or 1 ounce dry/quick)</option>
                    <option value="pancakes">Pancakes (3 pancakes)</option>
                    <option value="popcorn">Popcorn (6 cups popped or 100 calorie bag)</option>
                    <option value="ready_breakfast_cereal">Ready-to-eat Breakfast Cereal (1 cup flakes)</option>
                    <option value="rice">Rice (1 cup)</option>
                    <option value="pasta">Pasta (1 cup)</option>
                    <option value="tortillas">Tortillas (1 large tortilla)</option>
                    
                </select>
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