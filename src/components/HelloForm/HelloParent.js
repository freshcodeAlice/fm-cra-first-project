import React from "react"
import HelloForm from "./HelloForm"

class HelloParent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    getStateFromChild = (data) => {
       this.setState({
        name: data
       })
    }


    render () {
        const {name} = this.state;
        return (
            <>
            <HelloForm sendDataToParent={this.getStateFromChild}/>
           {name && <div className='hello-field'>{name}</div>}
            </>
        )
    }

}


export default HelloParent






/*
Написати компоненту з формою, що складається з одного інпута і кнопки відправки. За натиснення поряд з формою виникає прямокутник, який вітає користувача тим ім'ям, яке було введено в інпут

(Три компоненти!):
- Компонента з формою
- Компонента з полем для привітання (sibling до компоненти з формою)
- Батьківська компонента, через яку ці дві спілкуються
*/

