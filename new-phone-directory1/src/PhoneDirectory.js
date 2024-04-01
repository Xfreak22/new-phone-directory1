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
                name:"Suraj kumar",
                phone:"9319236003"
            },
        {
            id: '2',
                name:"Manish kumar",
                phone:"8448134417"
        }]
        }
    }


    deletesubscriberHandler = (subscriberId) =>{
   let subscribersList = this.state.SubscriberList;
   let subscriberIndex = 0;
   subscribersList.forEach(function (subscriber, index){
    if(subscriber.id == subscriberId){
        subscriberIndex = index;
    }
   },this);
   let newSubscribers = subscribersList;
   newSubscribers.splice(subscriberIndex, 1);
   this.setState({subscribers: newSubscribers});
    }

    addsubscriberHandler = (newSubscriber) => {
       let SubscriberList = this.state.SubscriberList;
       if(SubscriberList.length > 0){
        newSubscriber.id = SubscriberList[SubscriberList.length - 1].id +1;   
       }else{
        newSubscriber.id = 1;
       }
       SubscriberList.push(newSubscriber);
       this.setState({SubscriberList: SubscriberList});
    }
    render(){
        return(
            <Router>
                <Routes>
                <Route exact path="/"  Component={(props) => <ShowSubscribers {...props} SubscriberList={this.state.SubscriberList} deletesubscriberHandler={this.deletesubscriberHandler}/>}/>
                <Route exact path="/add" Component={({history}, props) => <AddSubscriber history={history} {...props} addsubscriberHandler={this.addsubscriberHandler}/>}/>
                </Routes>
            </Router>
            // <AddSubscriber addsubscriberHandler={this.addsubscriberHandler}/>
        )
    }
}

export default PhoneDirectory;