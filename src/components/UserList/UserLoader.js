import React, { Component } from 'react';
import UserList from './UserList';
import LoaderSpinner from "../LoaderSpinner";
import {getUser} from '../../api';

class UserLoader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            isError: null,
            page: 1,
            users: [],
        }
    }


    componentDidMount() {
        this.load()
     }
 
     componentDidUpdate(prevProps, prevState) {
         if(prevState.page !== this.state.page) {
             this.load(this.state.page)
         }
     }
 

    load = (page) => {
        getUser(page).then(data => {
            const {results} = data;
            this.setState({
                users: results,
                filteredUsers: results
            })
        })
        .catch((error)=>{
            this.setState({
                isError: error
            })
        })
        .finally(()=>{
            this.setState({
                isLoading: false
            })
        })
    }


    prevBtnHandler = () =>{
        this.setState({
            page: this.state.page - 1
        })
    }

    nextBtnHandler = () =>{
        this.setState({
            page: this.state.page + 1
        })
    }

    render() {
        const {users, isError, isLoading} = this.state;
        return (
            <>
            {isLoading && <LoaderSpinner />}
            {isError && <div>{isError.message}</div>}
                <button onClick={this.prevBtnHandler}>Previous page</button>
                <button onClick={this.nextBtnHandler}>Next page</button>
            {users.length && <UserList users={users}/>}
            </>
        );
    }
}

export default UserLoader;
