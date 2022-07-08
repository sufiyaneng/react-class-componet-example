import React from 'react';
import axios from "axios";
class Form extends React.Component {
    state = { userName: '' };
    handleSubmit = async (event) => {
        event.preventDefault();
        console.log(this.state.userName);
        const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
        console.log("response from github api",resp.data);
        this.props.onSucess(resp.data)
    }
    handleOnTextBoxChange = (event) => { 
        this.setState({ userName: event.target.value }) 
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.userName}
                    onChange={this.handleOnTextBoxChange}
                    placeholder="GitHub username"
                    required />
                <button>Add card</button>
            </form>
        );
    }
}
export default Form;