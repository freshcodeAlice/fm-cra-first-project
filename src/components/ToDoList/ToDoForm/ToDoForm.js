import React, { Component } from 'react';
// import './ToDoFormStyle.css';
import styles from './ToDoFormStyle.module.css';
import cx from 'classnames';

class ToDoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: '',
            isInputValid: true
        }
    }

   changeHandler = ({target: {value, name}}) => {

    if(value.includes('*')) {
        this.setState({
            isInputValid: false
        })
    } else {
        this.setState({
            [name]: value,
            isInputValid: true
        })
    }

   }

   submitHandler = (event) => {
        event.preventDefault();
        this.props.sendData(this.state.todo);
   }
   
   
    render() {
        const {todo, isInputValid} = this.state;

        const cNameString = cx({
            [styles.input]: true,
            [styles['invalid-input']]: !isInputValid
        })
        // const clasName = styles['input'] + ' ' + (isInputValid ? '' : styles['invalid-input']);
        return (
            <form onSubmit={this.submitHandler} className={styles.container}>
                <input 
                type='text' 
                value={todo} 
                name="todo" 
                onChange={this.changeHandler}
                className={cNameString}
                />
                <button type="submit" className={styles.btn}>Submit</button>
            </form>
        );
    }
}

export default ToDoForm;



