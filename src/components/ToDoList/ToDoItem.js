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
        <li className={props.className}>
            <span onClick={selectHandler}> {props.text}</span>
            <button onClick={()=>{clickHandler()}}>X</button>
        </li>
    )
}


export default ToDoItem;