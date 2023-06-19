import React, { Component } from 'react'

export default class Login extends Component 
{
    constructor(props)
    {
        super(props);
        this.state = {
        buttonCaption:"Login",
        isLoggedIn: false,
        text:"LOGOUT"
    }
    }
changeStatus = ()=>{
    if(!this.state.isLoggedIn)
    {
        this.setState({buttonCaption:"Logout",text:"Login"})
    }
    else{
        this.setState({buttonCaption:"Login",text:"Logout"})
    }
    this.setState({isLoggedIn:!this.state.isLoggedIn});
}


    render(){
        return (
            <div>
                <h3>You Are {this.state.text}</h3>
                <button onClick= {this.changeStatus}>{this.state.buttonCaption}</button>
            </div>
        )
    }
}