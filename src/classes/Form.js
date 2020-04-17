import React from 'react'; 
// import '../stylesheets/Form.css';
import '../stylesheets/front_page_form.css';

export default class Form extends React.Component {
    state = {
        category: "woman", 
        age: ""
    } 

    changeCategory = (e) => {
        this.setState({
            category: e.target.value
        }); 
    }; 

    changeAgeoName = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }); 
    };

    onSubmit = (e) => {
        // check age bounds
        if ((this.state.category.valueOf() === "man".valueOf()) && this.state.age < 19) {
            e.preventDefault(); 
            return <p>Incorrect age for a man, please reenter a valid input</p>
        } else if ((this.state.category.valueOf() === "woman".valueOf()) && this.state.age < 19) {
            e.preventDefault(); 
            return <p>Incorrect age for a woman, please reenter a valid input</p>
        } else if ((this.state.category.valueOf() === "girl".valueOf()) && (this.state.age > 18 || this.state.age < 9)) {
            e.preventDefault(); 
            return <p>Incorrect age for a girl, please reenter a valid input</p>
        } else if ((this.state.category.valueOf() === "boy".valueOf()) && (this.state.age > 18 || this.state.age < 9)) {
            e.preventDefault(); 
            return <p>Incorrect age for a boy, please reenter a valid input</p>
        } else if ((this.state.category.valueOf() === "child".valueOf()) && (this.state.age > 8 || this.state.age < 2)) {
            e.preventDefault(); 
            return <p>Incorrect age for a child, please reenter a valid input</p>
        } else {
            // valind input, add it 
            e.preventDefault();
            this.props.onSubmit(this.state);  
            this.setState({
                category: "woman", 
                age: ""
            }); 
        }
    }

    render() {
        return (
            <form className="Form" id="frame">
                    <div class="left top rectangle" id="n1_5"></div>
                    <div class="left top text" id="iinventory_label">I-inventory</div>
                    <div class="left top text" id="description_label">your daily nutriontal needs - calculated </div>
                    <img src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7fad/30b1/f618af4fd21e7dafb37a5539dcb964bb" width="553" height="3" class="left top line" id="n1_12"></img>
                <div class="left top rectangle" id="n3_30">
                    <div class="left top text" id="instructions_label">Begin by telling us who you’re feeding</div>
                    <input id='age_input' name="age" 
                        placeholder="Age" 
                        value={this.state.age} 
                        onChange={e => this.changeAgeoName(e)}                
                    />
                    <br />
                    <select id='category_selector' defaultValue={this.state.category} onChange={e => this.changeCategory(e)} >
                        <option value="woman">Woman (19+ years old)</option>
                        <option value="man">Man (19+ years old)</option>
                        <option value="girl">Girl (9-18 years old)</option>
                        <option value="boy">Boy (9-18 years old)</option>
                        <option value="child">Child (2-8 years old)</option>
                    </select>
                    <br />
                    <button id='add_button' onClick={e => this.onSubmit(e)}>Add Member</button>
                </div>
            </form>
        ); 
    }
}