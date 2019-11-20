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
        
        
        <div className="col-4">
          <input type="text" className="form-control" placeholder=" name"/>
          
        </div>
        <div className="col-4">
        <input type="text" class="form-control" id="inputPassword4" placeholder="Address"/>
          
        </div>
        <div className="col-4 ">
        <input type="text" class="form-control" id="inputPassword4" placeholder="State"/>
          
        </div>


        <div className="col-4 next">
          <input type="text" className="form-control" placeholder="country"/>
        </div>
        <div className="col-4 next">
          <input type="text" className="form-control" placeholder=" number of staff"/>
          
        </div>
        <div className="col-4 next">
        <input type="text" class="form-control" id="inputPassword4" placeholder="no of working days in a month"/>
          
        </div>
        <div className="col-6 select next ">
        <select >
  <option value="volvo">Saturday</option>
  <option value="saab">Sunday</option>
  <option value="volvo">Monday</option>
  <option value="saab">Tuesday</option>
  <option value="volvo">Wednesday</option>
  <option value="saab">Thursday</option>
  <option value="saab">Friday</option>
  
</select>
</div>
<div className="col-6 select next ">
<p className="check"><input className="col-4 check "  type="checkbox" name="vehicle" value="Bike"/> Set day as default (optional)</p>
          
        </div>

        <div className="col-12 file next ">
        <h6 className="logo">Select  logo:</h6>
   <input className="file" type="file" name="myFile"/>
  <input  className="file" type="submit"/>
      </div>

    
       
      </div>
    </form>

    <form>
    <h4 className="user">Payment Details (Paystack) </h4>
    <div className="form-row">
    <div className="col-6">
          <input type="number" className="form-control" placeholder=" card number"/>
          
        </div>
        <div className="col-6">
        <input type="date" class="form-control" id="inputPassword4" placeholder="Expiry date"/>
          
        </div>
        <div className="col-6 next ">
        <input type="number" class="form-control" id="inputPassword4" placeholder="CVV"/>
          
        </div>
        <div className="col-6 next ">
        <input type="number" class="form-control" id="inputPassword4" placeholder="amount"/>
          
        </div>
        <div className="col-12 pin next">
        <input  className="col-12 pin" type="number" class="form-control" id="inputPassword4" placeholder="PIN"/>
          
        </div>

        <div className="col-12 ">
        <button type="button" class="btn btn-success">Pay 300 NGN</button>
          
        </div>
      
        </div>
    </form>

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Submit form</button>
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