import React, {Component} from 'react';
import Header from './Header';
import './ShowSubscribers.css';
import './common/common1.css';
import Button1 from './button';
import { Link } from 'react-router-dom';


class ShowSubscribers extends Component {
  // constructor (){
  //   super();
  //   this.state = {
  //     subscriberlisttoshow: [{
  //       id: '1',
  //       Name:"Suraj kumar",
  //       Phone:"9319236003"
  //     }]
      
  //   }
  // }

  render() {
    return (
      <div >
        <div className="header-styling">
        <Header heading="Phone Directory"/>
        </div>
        <Link to="/add"><Button1 heading="Add"/></Link>
    <div className='sub-heading-div-margin-for-name-and-num'>
     <span style={{color: "darkslategrey", margin: 30, padding: 10, width: "auto"}}>Name</span>
     <span style={{color: "darkslategrey", margin: "auto", padding: 10, width: "auto"}}>Phone</span>
    </div>
 
      { 
        this.props.SubscriberList.map(sub =>{
         return  <div className='Content' key={sub.id}>
                <span className='Content-span-styling'>{sub.Name}</span>   
                <span className='Content-span-styling1'>{sub.Phone}</span>
                <button type='submit' className='button-style2'>Delete</button>
         </div>
        })
      } 

    </div>
    )
  }
}

export default ShowSubscribers;
