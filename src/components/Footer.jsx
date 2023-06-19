import Log from "./Log";
var Footer  = function (props){
    return (
        <div>
            <hr color = "blue" size = "3"/>
            <a href=""> About Us</a> &nbsp; &nbsp; &nbsp; &nbsp;
            <a href=""> Contact Us</a> &nbsp; &nbsp; &nbsp; &nbsp;
            <a href=""> Help</a> &nbsp; &nbsp; &nbsp; &nbsp;
            @copyright of {props.cn}
            <br/>
            <Log/>
        </div>
    )
}

export default Footer;