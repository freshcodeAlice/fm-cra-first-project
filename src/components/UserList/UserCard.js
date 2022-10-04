import './style.css';

function UserCard (props) {
    const {user: {name: {first: firstName, last: lastName}, email, picture: {medium: imgSrc}}} = props;
    return (
        <div className="card-wrapper">
            <img src={imgSrc} className="user-img"/>
            <h1>{firstName} {lastName}</h1>
            <p>{email}</p>
        </div>
    )
}


export default UserCard