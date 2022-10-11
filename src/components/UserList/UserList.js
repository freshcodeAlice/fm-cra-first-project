import React from "react";
import {getUser} from '../../api';
import UserCard from "./UserCard";
import './style.css'

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            filteredUsers: [],
            filterValue: ''
        }
    }

    componentDidMount() {
        getUser().then(data => {
            const {results} = data;
            this.setState({
                users: results,
                filteredUsers: results
            })
        });
    }

    changeSubmit = ({target: {value, name}}) => {
        this.setState({
            [name]: value
        });

        this.filterHandler(value);
    }

    filterHandler = (value) => {
        const {users} = this.state;
        const filteredUsers = users.filter((user) => 
             `${user.name.first} ${user.name.last}`
             .toLowerCase()
             .includes(value));
                            
        this.setState({
            filteredUsers
        })
    }

    renderUsers = () => {
        const {filteredUsers} = this.state;
        return filteredUsers
        .sort((a,b)=> b.name.first > a.name.first ? -1 : 1)
        .map((user)=> <UserCard user={user} key={user.email}/>)
    }


    render() { 
        const {users, filterValue} = this.state;
            return (
            <>
            <h1>Hello</h1>
            <input type="text" name="filterValue" value={filterValue} onChange={this.changeSubmit}/>
            <section className="card-container"> {users.length ? this.renderUsers() : null} </section>
            </>
        )
        }
}

export default UserList;



/*
Реалізувати введення та обробку інпута.
На основі введених даних фільтрувати всіх користувачів, залишивши тільки тих, в імені яких є вказані літери



*/