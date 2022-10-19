import './style.css';
import PropTypes from 'prop-types';
import React from 'react';


function UserCard (props) {

    
    const {user: {name: {first: firstName, last: lastName}, email, picture: {large: imgSrc}}} = props;
    return (
        <div className="card-wrapper">
            <img src={imgSrc} className="user-img"/>
            <h1>{firstName} {lastName}</h1>
            <p>{email}</p>
        </div>
    )
}

UserCard.defaultProps = {
    user: {
        name: {
            first: 'Anonym',
            last: 'Anonymus'
        },
        email: 'mail@mail',
        picture: {
            large: ''
        }
    }
}


UserCard.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.shape({
            first: PropTypes.string,
            last: PropTypes.string
        }),
        email: PropTypes.string,
        picture: PropTypes.shape({
            large: PropTypes.string
        })
      })
}

export default UserCard