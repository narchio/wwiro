import React from 'react'; 

export default class Form extends React.Component {
    state = {
        firstName: "",
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
        e.preventDefault();
        this.props.onSubmit(this.state);  
        this.setState({
            firstName: "", 
            category: "woman", 
            age: ""
        }); 
    }

    render() {
        return (
            <form>
                <p>Please enter your family members, one at a time, below...</p>
                <input name="firstName" 
                    placeholder="First Name" 
                    value={this.state.firstName} 
                    onChange={e => this.changeAgeoName(e)}                
                />
                <br />
                <input name="age" 
                    placeholder="Age" 
                    value={this.state.age} 
                    onChange={e => this.changeAgeoName(e)}                
                />
                <br />
                <select defaultValue={this.state.category} onChange={e => this.changeCategory(e)} >
                    <option value="woman">Woman (19+ years old)</option>
                    <option value="man">Man (19+ years old)</option>
                    <option value="girl">Girl (9-18 years old)</option>
                    <option value="boy">Boy (9-18 years old)</option>
                    <option value="child">Child (2-8 years old)</option>
                </select>
                <br />
                <button onClick={e => this.onSubmit(e)}>Add Family Member</button>
            </form>
        ); 
    }
}