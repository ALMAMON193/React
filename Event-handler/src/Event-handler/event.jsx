import React, { Component } from "react";

export default class event extends Component {

   constructor(props) {
     super(props)
   
     this.state = {
      searchValue : " "
     }
   }
   

  
   handleOnChange = (e) =>{
    this.setState({
        searchValue : e.target.value
    }, () => {
        console.log("Inside setState : "+this.state.searchValue)
    })
    console.log("Outside setState : "+this.state.searchValue)
}


  render() {
    const {searchValue} = this.state
    return (
      <div>
      <div className="container">
        <h2>Filterable Table</h2>
        <p>Type something in the input field to search the table for first names, last names or emails:</p>  
        <input type="text" value={searchValue} onChange={this.handleOnChange}/>
        <p>{searchValue}</p>
      <br />
       
         </div>

      </div>
    );
  }
}
