import React, {Component} from "react";
import './common/common1.css';
import Header from "./Header";
import Button1 from "./button";
import { Fragment } from "react";

class AddSubscriber extends Component {


    constructor (){
        super();
        this.state ={
            id:0,
            name:'',
            phone:''
        }
    }

        inputChangedHandler = (e) =>{
            const state = this.state;
            state[e.target.name] = e.target.value;
            this.setState(state);
            console.log(state);
        }
    
    render(){
        const {name,phone} = this.state;
        return(
            <Fragment>
        <div className="header-styling">
        <Header heading="Add Subsrciber"/>
        </div>
        <div>
        <Button1 heading="Back"/>
        </div>
        <div>
            <form className="form-style">
             <label className="label-design" htmlFor="name">Name: </label><br/>
             <input className="input-design" id="name" name="name" onChange={this.inputChangedHandler}/><br/>
             <label className="label-design" htmlFor="phone">Phone: </label><br/>
             <input className="input-design" id="Phone" name="phone" onChange={this.inputChangedHandler}/><br/>
            <div className="span-container-for-subscriber">
             <span>Subsrciber to be added: </span><br/>
             <span className="label-design">Name: {name}</span><br/>
             <span className="label-design">Phone: {phone}</span><br/> 
             <button type="submit" className="button-style2">Add</button>
            </div>
            </form>
        </div>
        </Fragment>
        )
    }
}


export default AddSubscriber;