import React, {Component} from "react";
import './common/common1.css';
import Header from "./Header";
import Button1 from "./button";
import { Fragment } from "react";

class AddSubscriber extends Component {
    render(){
        return(
            <Fragment>
        <div className="header-styling">
        <Header heading="Add Subsrciber"/>
        </div>
        <div>
        <Button1 heading="Back"/>
        </div>
        <div>
            <form>
             <label htmlFor="name">Name: </label><br/>
             <input id="name" name="name"/><br/>
             <label htmlFor="Phone">Phone: </label><br/>
             <input id="Phone" name="Phone"/><br/>
            <div className="span-container-for-subscriber">
             <span>Subsrciber to be added: </span><br/>
             <span>Name:</span><br/>
             <span>Phone:</span><br/> 
             <Button1 heading="Add"/>
            </div>
            </form>
        </div>
        </Fragment>
        )
    }
}


export default AddSubscriber;