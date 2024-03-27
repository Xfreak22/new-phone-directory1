import React, {Component} from 'react';
import ShowSubscribers from './ShowSubscribers';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AddSubscriber from './AddSubscriber';



class PhoneDirectory extends Component{


    constructor(){
        super();
        this.state = {
            SubscriberList: [{
                id: '1',
                Name:"Suraj kumar",
                Phone:"9319236003"
            }]
        }
    }

    addsubscriberHandler = (newSubscriber) =>{
       let SubscriberList = this.state.SubscriberList;
       if(SubscriberList.length >0){
        newSubscriber.id = SubscriberList[SubscriberList.length -1].id +1;   
       }else{
        newSubscriber.id = 1;
       }

       SubscriberList.push(SubscriberList);
       this.setState({SubscriberList: SubscriberList});
       console.log("Phone Directory");
       console.log(this.state.SubscriberList); 
    }
    render(){
        return(
            <Router>
                <Routes>
                <Route exact path='/' Component={(props) => <ShowSubscribers {...props} SubscriberList={this.state.SubscriberList}/>}/>
                <Route exact path='/add' Component={(props) => <AddSubscriber {...props} addsubscriberHandler={this.state.addsubscriberHandler}/>}/>
                </Routes>
            </Router>
        )
    }
}

export default PhoneDirectory;