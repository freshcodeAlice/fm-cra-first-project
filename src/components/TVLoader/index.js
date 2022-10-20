import React, { Component } from 'react';
import {getUser} from '../../api';

function UserLoader2 (props) {

 const {data, isLoading, error}= useData(getUser);
     
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

export default UserLoader2;
