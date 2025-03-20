
import React from "react";

class FormInput extends React.Component {
    state = {
        username: "",
        password: "",
    }

    OnChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    OnChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    onSubmitForm = (event) => {
        event.preventDefault();

        if (this.state.username === '' || this.state.password === '') {
            alert("Error")
            return;
        }

        
        alert(`${this.state.username}` + ` ${this.state.password} login successfully`);
        this.setState({
            username: "",
            password: "",
        })
    }



    render() {
        return(
            <form onSubmit={this.onSubmitForm}>
                <label htmlFor="username">Username:</label><br/>
                <input type="text" value={this.state.username} onChange={this.OnChangeUsername}/><br/>

                <label htmlFor="password">Password:</label><br/>
                <input type="password" value={this.state.password} onChange={this.OnChangePassword}/>
                
                <br/>
                <input type="submit" value={"Submit"}/>
            </form>
        );
    }
}

export default FormInput;