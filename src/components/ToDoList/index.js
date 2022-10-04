import React from 'react';
import ToDoItem from './ToDoItem';
import Header from './Header';


class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        const list = ['go to party', 'meet friends', 'have a walk'].map((text, index) => ({ id: index, text, isSelected: false }))
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

    select(id) {
        const newList = [...this.state.list];
        newList.forEach((obj) => {
            if (obj.id === id) {
                obj.isSelected = !obj.isSelected;
            }
        });
        this.setState({
            list: newList
        })
    }

    headerSelected() {
        return this.state.list.filter((obj)=> obj.isSelected);
    }


    renderLi() {
        const { list } = this.state;
        return list.map((obj) => 
        <ToDoItem 
        key={obj.id} 
        text={obj.text} 
        id={obj.id} 
        delCallback={(id) => this.onClick(id)} 
        selectCallback={(id) => this.select(id)} 
        className={obj.isSelected ? 'hightlight':null}/>)
    }

    render() {
        return (
            <React.Fragment>
                <Header list={this.headerSelected()}/>
                <ul>
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
*/

export default ToDoList