import React, { Component } from 'react';

class TVLoader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tv: [],
            isLoading: true,
            isError: null
        }
    }
    componentDidMount() {
        this.load();
    }
    
    load = () => {
        fetch('./tv.json')
        .then((response) => response.json())
        .then((tv) => {
            this.setState({
                tv
            })
        })
        .catch((error) => {
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


    render() {
        const {tv, isLoading, isError} = this.state;
        return (
            <>
            {isLoading && <div>Loading...</div>}
            {isError && <div>Error happening!</div>}
            <ol>
                {tv.map((tel)=> <li>{tel.brand}.{tel.model} --- {tel.price}</li>)}
            </ol>
            </>
        );
    }
}

export default TVLoader;
