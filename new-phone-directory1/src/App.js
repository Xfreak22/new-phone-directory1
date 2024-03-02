import React, {Component} from 'react';
import Header from './Header';
import Button1 from './button';

class App extends Component {
  render() {
    const Button2 = function() {
      const buttonstyle1 = {background: "red", color: "white", margin: "auto", padding: 10, width: 70, border: "none"} 
      return(
      <div>
        <button style={buttonstyle1}>Delete</button>
      </div>
      )
  }
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
      <div>
      <Header headingname="Phone Directory"/>  
    <div>
      <Button1/>
    <div/>
    <div>
     <span style={{color: "darkslategrey", margin: "auto", padding: 10, width: "auto"}}>Name</span>
     <span style={{color: "darkslategrey", margin: "auto", padding: 10, width: "auto"}}>Phone</span>
    </div>
 
      {
        subscriberlist.map(sub =>{
         return <div key={sub.id}>
                <span style={{color: "darkslategrey", margin: "auto", padding: 10, width: "auto"}}>{sub.Name}</span>
                <span style={{color: "darkslategrey", margin: "auto", padding: 10, width: "auto"}}>{sub.Phone}</span>
                <span><Button2/></span>
               
         </div>
        })
      } 

    </div>
    </div>
    )
  }
}

export default App;
