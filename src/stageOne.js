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
    hdhhfhfad
      <div className="modal-body">
      <h2 className="user"> User Details</h2>
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
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
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