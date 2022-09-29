import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import Greeting from './components/Greeting/Greeting';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.Fragment>
        <Greeting name="Alex"/>
        <Greeting name="John"/>
        <Greeting name="Jane"/>
        <Greeting name="Masha"/>
   </React.Fragment>
);
