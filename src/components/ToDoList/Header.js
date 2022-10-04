function Header (props) {


    return (
        <section>{props.list.map((obj)=> <p>{obj.text}</p>)}</section>
    )
}


export default Header;