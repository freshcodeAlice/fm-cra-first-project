import React, { Component } from 'react';

class ToDoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: ''
        }
    }

   changeHandler = ({target: {value, name}}) => {
        this.setState({
            [name]: value
        })
   }

   submitHandler = (event) => {
        event.preventDefault();
        this.props.sendData(this.state.todo);
   }
   
   
    render() {
        const {todo} = this.state;
        return (
            <form onSubmit={this.submitHandler}>
                <input 
                type='text' 
                value={todo} 
                name="todo" 
                onChange={this.changeHandler}/>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default ToDoForm;

