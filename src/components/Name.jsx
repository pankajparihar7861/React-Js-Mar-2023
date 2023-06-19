import React, { Component } from 'react';
import LifeCycleA from './LifeCycleA';
export default class Name extends Component {
    constructor(props)
    {
        super(props);
        this.state={fullName:{fn:"A",ln:"B"}}
    }
        //-------------------------------------

        handleChange=(event)=>{
            let {name,value,type}=event.target;
            if(name=="fn")
            {
                this.setState((prevState)=>{
                    return ({fullName:{...prevState.fullName, fn:value}})
                });
            }
            else{
                 this.setState((prevState)=>{
                    return ({fullName:{...prevState.fullName, ln:value}})
                 });
            }
        }
    render(){
        return (
            <div>
                FirstName:<input type="text" name="fn" onChange={this.handleChange} value={this.state.fullName.fn}/><br/>
                LastName:<input type="text" name="ln" onChange={this.handleChange}  value={this.state.fullName.ln}/><br/>
                <h3>FullName: FN={this.state.fullName.fn} - LN={this.state.fullName.ln}</h3>  
                <hr/>
                     <LifeCycleA  fname="Pankaj"/>            
            </div>
        )
    }
}
