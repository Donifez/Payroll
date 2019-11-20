import React, {Component} from "react";
import "./App.css";


class stageOne extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            
            <div className=" jumbotron-fluid">

             
              <div className="header">
              <h2>Simplify payroll</h2>
            <h3>With software and services designed for your business</h3>
 
            <button type="button" className="btn btn-primary get-started" data-toggle="modal" data-target="#exampleModalScrollable">
  Get started
</button>


<div className="modal fade" id="exampleModalScrollable" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-scrollable" role="document">
    <div className="modal-content">
    
      <div className="modal-body">
      <h4 className="user"> User Details</h4>
      <form>
      
  <div className="form-row">
    
    <div className="col-6">
      <input type="text" className="form-control" placeholder="First name"/>
    </div>
    <div className="col-6">
      <input type="text" className="form-control" placeholder="Last name"/>
      
    </div>
    <div className="col-6 space">
    <input type="email" class="form-control" id="inputPassword4" placeholder="Email"/>
      
    </div>
    <div className="col-6 space">
    <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
      
    </div>

   
  </div>
</form>
<h4 className="user">Business Details</h4>

<form>
      
      <div className="form-row">
        
        <div className="col-3">
          <input type="text" className="form-control" placeholder="logo"/>
        </div>
        <div className="col-3">
          <input type="text" className="form-control" placeholder=" name"/>
          
        </div>
        <div className="col-3">
        <input type="text" class="form-control" id="inputPassword4" placeholder="Address"/>
          
        </div>
        <div className="col-3 ">
        <input type="text" class="form-control" id="inputPassword4" placeholder="State"/>
          
        </div>


        <div className="col-3">
          <input type="text" className="form-control" placeholder="country"/>
        </div>
        <div className="col-3">
          <input type="text" className="form-control" placeholder=" number of staff"/>
          
        </div>
        <div className="col-3">
        <input type="text" class="form-control" id="inputPassword4" placeholder="no of working days in a month"/>
          
        </div>
        <div className="col-3 ">
        <select >
  <option value="volvo">Saturday</option>
  <option value="saab">Sunday</option>
  
</select>
          
        </div>
    
       
      </div>
    </form>

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">next</button>
      </div>
    </div>
            
            
          </div>
          </div>
          </div>
          </div>
          
          
        );
    }
}

export default stageOne;