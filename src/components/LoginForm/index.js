import React, { Component } from 'react';
import { SCHEMA } from '../../schemas';


const initialState = {
    firstName:'',
    lastName:'',
    email: ' ',
    pass: ' ',
}


class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initialState,
            isError: null
        }
    }

    changeHandler = ({target: {value, name}}) => {
        this.setState({
            [name]: value
        })
    }

    submitHandler = (event) => {
        event.preventDefault();

        try {
          const result = SCHEMA.validateSync(this.state);
          console.log(result);
        } catch(err) {
            this.setState({
                isError: err
            })
        }
    }
    
    render() {
        const {firstName, lastName, email,pass, isError} = this.state;
        return (
            <form onSubmit={this.submitHandler}>
                <input 
                    type="text"
                    value={firstName}
                    name="firstName"
                    onChange={this.changeHandler}
                    placeholder="firstName"
                    />
                    <input 
                    type="text"
                    value={lastName}
                    name="lastName"
                    onChange={this.changeHandler}
                    placeholder="lastName"
                    />
                <input 
                    type="text"
                    value={email}
                    name="email"
                    onChange={this.changeHandler}
                    placeholder="email"
                
                    />
                <input 
                    type="text" 
                    value={pass}
                    name="pass"
                    onChange={this.changeHandler}
                    placeholder="pass"
                   
                    />
                    <button>Submit</button>
                    {isError && <p style={{color: 'red', fontSize: '20px'}}>{isError.message}</p>}
            </form>
        );
    }
}

export default SignUpForm;