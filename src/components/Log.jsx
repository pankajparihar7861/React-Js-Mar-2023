import React, {useState} from 'react'
export default function Log(props)
{
    let [buttonCaption,setButtonCaption]=useState("Login");
    let [isLoggedIn,setIsLoggedIn]=useState(false)
    let [text,setText] = useState("Logout");
    //---------------------------------
    let changeStatus=()=>{
        if(!isLoggedIn)
        {
            setButtonCaption("Logout")
            setText("Login")
        }
        else{
            setButtonCaption("Login")
            setText("Logout")
        }
        setIsLoggedIn(!isLoggedIn)
    }
    //---------------------------------
    return (
        <div>
            <div>
                <h3>You are {text}</h3>
                <button onClick  = {changeStatus}>{buttonCaption}</button>
            </div>
        </div>
    )
}
