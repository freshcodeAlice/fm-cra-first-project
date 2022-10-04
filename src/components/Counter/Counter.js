import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.intervarId = null;
    }

    start = () => {
        this.intervarId = setInterval(()=> {
            const {count} = this.state;
            this.setState({
                count: count+1
            })
        }, 1000);
        console.log(this.intervarId);
    }

    componentDidMount() {
        this.start();
    }

    componentWillUnmount () {
        console.log('I will die')
        clearInterval(this.intervarId);
    }

    render() {
        return <>
        <h1>{this.state.count}</h1>
        <button>Click</button>
        </>
    }
}

export default Counter