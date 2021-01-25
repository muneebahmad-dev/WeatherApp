import React, { Component } from 'react';
const Data=(props)=>{
    return <div>
      {props.temperature ? <p><b>Temperature:</b>  {props.temperature} °C</p> : "" }
      {" "}
      {props.city ? <p><b>City:</b> {props.city}</p>:" "}
      {" "}
      {props.description ? <p><b>Condition:</b> {props.description}</p>:" "}
      {" "}
      {props.humidity ? <p><b>Humidity: </b>{props.humidity}</p>:" "}
      {" "}
      {props.error ? <p>{props.error}</p>:" "}
    </div>
    
}

export default Data;