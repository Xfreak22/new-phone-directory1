import React, {Component} from 'react';



class App extends Component {
  render() {
    let x = 1;
      let y = 2;
    return(  
    <div>
      
    {/* <div className="Header">
      Phone directory
    </div>
    <button>Add</button>
    <div>
     <span>Name</span><br/>
     <span>Phone</span>
    </div> */}
    <label htmlfor="name">Name: </label>
    <input id="name" text="text" placeholder="Type here" defaultValue={x+y}/>
    </div>
    )
  }
}

export default App;
