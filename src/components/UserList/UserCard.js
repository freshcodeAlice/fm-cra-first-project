import './style.css';
import PropTypes from 'prop-types';
import React from 'react';


class UserCard extends React.Component {

    
    render() {
    const {user: {name: {first: firstName, last: lastName}, email, picture: {medium: imgSrc}}} = this.props;
    return (
        <div className="card-wrapper">
            <img src={imgSrc} className="user-img"/>
            <h1>{firstName} {lastName}</h1>
            <p>{email}</p>
        </div>
    )
    }

}

UserCard.defaultProps = {
    user: {
        name: {
            first: 'Anonym',
            last: 'Anonymus'
        },
        email: 'mail@mail',
        picture: {
            medium: ''
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
            medium: PropTypes.string
        })
      })
}

export default UserCard