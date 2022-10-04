import './style.css';

function ToDoItem(props) {

const clickHandler = () => {
    const {delCallback, id} = props;
    delCallback(id)
}

const selectHandler = () => {
    const {selectCallback, id} = props;
    selectCallback(id);
}

    return (
        <li onClick={selectHandler} className={props.className}>
            {props.text}
            <button onClick={()=>{clickHandler()}}>X</button>
        </li>
    )
}


export default ToDoItem;