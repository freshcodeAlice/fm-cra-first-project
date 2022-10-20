import React, { Component } from 'react';
import {useData} from '../DataProvider';

function PhonesLoader (props) {


 const {data, isLoading, error}= useData(getPhones);
     
    function getPhones () {
        return fetch('./phones.json')
          .then((response)=>response.json())
        }

        return (
        <>
        {isLoading && <div>Loading</div>}
        {error && <div>{error.message}</div>}
        <ul>
        {data && data.map((elem, index) => (<li key={index}>{elem.brand} {elem.model} {elem.price}</li>))}
         </ul>
        </>
        )
}

export default PhonesLoader;
