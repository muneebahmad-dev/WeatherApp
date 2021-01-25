import React, { Component } from 'react';
class form extends Component{
    render(){
        return <form onSubmit={this.props.getweather}>
        <input type='text' name="city" placeholder="City..." autoComplete='off'/>
        {"  "}
        <input type='text' name="country" placeholder="Country..." autocomplete="off"/>
        {" "}
        <button>Check</button>
       
    </form>
    }
}
export default form;