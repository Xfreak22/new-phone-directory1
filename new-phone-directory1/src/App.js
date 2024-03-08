import React, {Component} from 'react';
import Header from './Header';
import './App.css';
import './common/common1.css';
import Button1 from './button';

class App extends Component {
  render() {
    let subscriberlist = [
      {
        id: 1,
        Name: "Suraj",
        Phone: 9319236003
      },
      {
        id: 2,
        Name: "Manish",
        Phone: 8144813417
      }
    ]
    return (
      <div >
        <div className="header-styling">
        <Header heading="Phone Directory"/>
        </div>
        <Button1 heading="Add"/>
    <div className='sub-heading-div-margin-for-name-and-num'>
     <span style={{color: "darkslategrey", margin: 30, padding: 10, width: "auto"}}>Name</span>
     <span style={{color: "darkslategrey", margin: "auto", padding: 10, width: "auto"}}>Phone</span>
    </div>
 
      { 
        subscriberlist.map(sub =>{
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

export default App;
