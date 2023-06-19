import React from "react";
import Login from "./Login";
class Header extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={country:"INDIA"}
    }
    
    render(){
        return(
            <div>
                    <h3>
                        <marquee>
                        Welcome To {this.props.companyName[1]} for {this.props.topic} session - country :
                         {this.state.country}
                         </marquee>
                    </h3>

                <h2>
                    short name of company is: {this.props.cn}
                </h2>
                <Login/>
                <hr color ="green" size ="5" />
            </div>
        )
    }
}
export default Header;