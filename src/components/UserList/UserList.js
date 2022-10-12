import React from "react";

import UserCard from "./UserCard";
import './style.css';


class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterValue: '',
        }
    }



    changeSubmit = ({target: {value, name}}) => {
        this.setState({
            [name]: value
        });

    }

    filterHandler = (value) => {
        const {users} = this.props;
       return users.filter((user) => 
             `${user.name.first} ${user.name.last}`
             .toLowerCase()
             .includes(value));
    }



    renderUsers = () => {
       return this.filterHandler(this.state.filterValue)
        .sort((a,b)=> b.name.first > a.name.first ? -1 : 1)
        .map((user)=> <UserCard user={user} key={user.email}/>)
    }


    render() {
        const {filterValue} = this.state; 
            return (
            <>
            <input type="text" name="filterValue" value={filterValue} onChange={this.changeSubmit}/>
            <section className="card-container"> {this.renderUsers()}</section>
            </>
        )
        }
}

export default UserList;

