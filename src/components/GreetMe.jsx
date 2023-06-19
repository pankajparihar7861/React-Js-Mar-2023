import React, { Component } from 'react'
import Name from './Name';

export default class GreetMe extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            count:0,
            msg:"Happy Ugadi",
            cityList:["pune" , "Noida" , "Chennai" , "Bangalore"],
            empList:[
                
                    {empId:444, empName:"abc" , empSal:1000.0},
                    {empId:123, empName:"bca" , empSal:2000.0},
                    {empId:321, empName:"def" , empSal:3000.0},
                    {empId:987, empName:"cde" , empSal:4000.0}
                
            ]

        }

        this.incCount = this.incCount.bind(this);
        this.decCount  = this.decCount.bind(this);
        
    }

    incCount() {
        this.setState({count: this.state.count+1});
    }

    //----------------------------------------

    decCount(){
        this.setState({count: this.state.count-1});
    }

    //-----------------------------------------


    render(){
        let newCityList = this.state.cityList
             .map((city,cityIndex)=>{
                return (<li key={cityIndex}>{city}</li>)

             })


    //---------------------------------------------

    let newEmpList = this.state.empList.map(
        (emp,empIndex)=>{
            return (<tr key={empIndex}>
             <td>{emp.empId}</td>
             <td>{emp.empName}</td>
             <td>{emp.empSal}</td>
            </tr>)
        }
    );


    return(

        <div>GreetMe......
        <h3>{this.state.msg}</h3>
        <button onClick  ={this.incCount} > Increment Count</button>
        <h2> Count: {this.state.count}</h2>
        <button onClick = {this.decCount}> Decrement Count</button>
        <br/>
        <h3>Cities....</h3>
        
        {newCityList}
        <h3>Emp List</h3>
        <table border="1">
          <thead>  
            <tr>
                <th>EMPID</th>
                <th>EMPNAME</th>
                <th>EMPSAL</th>
            </tr>
            </thead>
            <tbody>
            {newEmpList}
            </tbody>
        </table>
        <Name/>
        </div>
    )
 } 
}