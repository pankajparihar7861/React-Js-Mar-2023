import React,{useState,useEffect} from 'react'

export default function HookDemo(){
let [count,setCount]= useState(0);
let [fullName,setFullName]=useState({fn:"",ln:""});
let [items,setItems]=useState([]);
}
//---------------------------

useEffect(()=>{
    console.log("Hook Demo useEffect is called ");
    return ()=>{console.log("write clearance code")}
}))

















return (
    <div>HookDemo
        <button onClick={()=>{setCount(count+5)}}>
         Increment Count By 5</button> 
        <h3>Count : {count}</h3>
        FirstName: <input type="text"name="fn" onchange={handlechange}
        value={fullname.fn}/><br/>
        LastName: <input type="text"name="ln" onchange={handlechange}
        value={fullname.ln}/><br/>
        <p>FN:{fullName.fn} - LN: {fullName.ln}</p>
        <button onClick = {generateRandomNo}>Generate Random Number</button>
        <h3>Number List...</h3>
        {items.map((no,index)=>{
            return (<li key={index}>{no}</li>)
        })}
</div>
)
    }
}