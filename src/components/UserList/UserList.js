import React from "react";
import {getUser} from '../../api';
import UserCard from "./UserCard";
import './style.css'

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        getUser().then(data => {
            const {results} = data;
            this.setState({
                users: results
            })
        });
    }

    renderUsers = () => {
        const {users} = this.state;
        return users.map((user)=> <UserCard user={user} key={user.email}/>)
    }


    render() { 
        const {users} = this.state;
            return (
            <>
            <h1>Hello</h1>
            <section className="card-container"> {users.length ? this.renderUsers() : null} </section>
            </>
        )
        }
}

export default UserList;