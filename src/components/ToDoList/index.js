import React from 'react';

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        const list = ['go to party', 'meet friends', 'have a walk'].map((text, index) => ({ id: index, text }))
        this.state = {
            list
        }
    }

    onClick(event) {
        const {list} = this.state;
        const {dataset: {id}} = event.target;
      const filtered = list.filter(elem => elem.id !== Number(id));
      this.setState({
        list: filtered
      })
    }

    renderLi() {
        const { list } = this.state;
        return list.map((obj) => <li key={obj.id}>{obj.text}<button onClick={(event)=>{this.onClick(event)}} data-id={obj.id}>X</button></li>)
    }

    render() {
        return (
            <ul>
                {this.renderLi()}
            </ul>
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