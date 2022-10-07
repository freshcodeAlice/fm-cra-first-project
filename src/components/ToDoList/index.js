import React from 'react';
import ToDoItem from './ToDoItem';
import ToDoForm from './ToDoForm/ToDoForm';
import styles from './style.module.css';


class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        const list = ['go to party', 'meet friends', 'have a walk'].map((text, index) => ({ id: (Math.random()*100), text }))
        this.state = {
            list
        }
    }

    onClick(id) {
        const { list } = this.state;
        const filtered = list.filter(elem => elem.id !== Number(id));
        this.setState({
            list: filtered
        })
    }

    formHandler = (text) => {
        const {list} = this.state;
        this.setState({
            list: [...list, 
                {
                id: Math.random()*100,
                text 
            }]
        })
    }


    renderLi() {
        const { list } = this.state;
        return list.map((obj) => 
        <ToDoItem 
        key={obj.id} 
        text={obj.text} 
        id={obj.id} 
        delCallback={(id) => this.onClick(id)} />)
    }

    render() {
        return (
            <React.Fragment>
                <ToDoForm sendData={this.formHandler}/>
                <ul className={styles.container}>
                    {this.renderLi()}
                </ul>
            </React.Fragment>
        )
    }
}


/*Створити компоненту TodoList
Ця компонента має в стейті масив рядків
['go to party', 'meet friends', 'have a walk']
Редерить список <li>, всередині якої один рядок з масиву

<ul>
    <li> go to party <button onClick={} data-id={}>X</button></li>
    <li> meet friends </li>
    <li> have a walk </li>
</ul>


В кожній li зробити кнопку, за натиснення на яку цей елемент списку має зникнути.
(тобто оновити стейт таким чином, щоб в масиві з рядками або об'єктами не було того, який пов'язаний з кнопко

  <Header list={this.headerSelected()}/>

*/

export default ToDoList