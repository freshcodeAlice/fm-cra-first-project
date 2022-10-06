import React from "react";
import ModalWindow from "./ModalWindow";

class ModalWindowParent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false
        }
    }

    closeModalWindow = () => {
        this.setState({
                modalOpen: false
            })
    }

    getData = (data) => {
        console.log(data);
    }

    render() {
        return (
            <>
            <button onClick={()=>{this.setState({modalOpen: true})}}>Click to open</button>
            {this.state.modalOpen && <ModalWindow 
                                        close={this.closeModalWindow}
                                        sendData={this.getData}/>}
            </>
            )
    }
}


export default ModalWindowParent