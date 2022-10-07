import React, { Component } from 'react';
// import './ToDoFormStyle.css';
import styles from './ToDoFormStyle.module.css';

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

        cx({
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
                className={clasName}
                />
                <button type="submit" className={styles.btn}>Submit</button>
            </form>
        );
    }
}

export default ToDoForm;




function cx (objectClassNames) {
   return Object.entries(objectClassNames)
   .filter(([className, condition])=>condition)
   .map(([className, condition]) => className)
   .join(' ');
} 
//'className1 className2'


/*

objectClassNames = {
    className1: true,
    className2: true,
    className4: false
}

// [[className1, true], [className2, true], [className4, false]] -> 
[[className1, true], [className2, true]] -> [className1, className2] -> 'className1 className2'

*/