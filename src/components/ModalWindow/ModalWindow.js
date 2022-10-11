import React from "react";
import imgsrc from './2804530.jpg';
import 'animate.css';
import './style.css';
import PropTypes from 'prop-types';


class ModalWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }
    }

    emailHandler = ({target: {value}}) => {
        this.setState({
            email: value
        })
    }

    closeModal = () => {
        this.props.close();
    }

    submitHandler = (event) => {
        event.preventDefault();
        const {email} = this.state;
        const {sendData} = this.props;
        sendData(email);
        this.closeModal();
    }

    render() {
        return (
            <>
            <div className='background' onClick={this.closeModal}></div>
                <section className="modal-wrapper animate__animated animate__wobble">
                    <div className="close-button" onClick={this.closeModal}>X</div>
                    <img src={imgsrc} className='img'/>
                    <h2>Don`t miss update from us!</h2>
                    <p>lorem ipsum dolor sit amet</p>
                    <form className="row" onSubmit={this.submitHandler}>
                        <input 
                        type="text" 
                        className="subscribe-input" 
                        placeholder="Type your email"
                        value={this.state.email} 
                        onChange={this.emailHandler}
                        autoFocus/>
                        <button 
                        className="submit-btn" 
                        type="submit">Subscribe now</button>
                    </form>
                </section>
            </>

        )
    }
}

ModalWindow.defaultProps = {
    sendData: () => {}
}


ModalWindow.propTypes = {
    sendData: PropTypes.func,
    close: PropTypes.func.isRequired
}


export default ModalWindow