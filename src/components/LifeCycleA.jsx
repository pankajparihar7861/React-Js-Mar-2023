import React, { Component } from 'react';

class LifeCycleA extends Component 
{
    constructor(props)
    {
        super(props);
        this.state={
            fname:"Pankaj"
        }
        console.log("LifeCycleA Constructor Executed....");
    }
    //----------------------------------
    static getDerivedStateFromProps(myProps,myState)
    {
        console.log(`LifeCycleA getDerivedStateFromProps Executed...myProps: ${myProps.fname} - myState: ${myState.fname}`);
        return null;
    }

    render() {
        console.log("LifeCycleA render is executed...");
        return (
            <div>LifeCycleA..
                <button onClick={()=>{
                    this.setState((prevState)=>{
                        return ({fname:"Parihar"})
                    })
                }}>change Name</button>
                <br/>
                <p>Name : {this.state.fname}</p>

                <h6>Props Fame - ${this.props.fname}</h6>
            </div>
        );
    }
    //--------------------------------------
    componentDidMount()
    {
        console.log("LifeCycleA componentDidMount is executed..");
    }
}

export default LifeCycleA;