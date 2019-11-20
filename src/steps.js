import React from "react";
import "./App.css";

class steps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="steps">
                <h3 className="steps-header">3 easy steps to onboard Users</h3>
                <div className="row">
              <div className="col-sm-4">
              <div className="card" >
           
            <div className="card-body">
            <img className="first-image img-responsive" src={"images/user.ico"}/>
            <h5>Step 1 </h5>
        <p className="card-text">Collect user information (Name, Email, Phone, Password)
.</p>
         </div>
              </div>
            
                </div>
                <div className="col-sm-4">
              <div className="card" >
           
            <div className="card-body">
            <img className="first-image img-responsive" src={"images/gear.jpg"}/>
            <h5>Step 2</h5>
        <p className="card-text">Business Details (logo, name, address, state, country,  no of staff,etc.)
.</p>
         </div>
              </div>
            
                </div>

                <div className="col-sm-4">
              <div className="card" >
           
            <div className="card-body">
            <img className="first-image img-responsive" src={"images/paystack.png"}/>
            <h5>Step 3</h5>
        <p className="card-text">Subscribe using a leading payment system called Paystack at 300NGN.</p>
         </div>
              </div>
            
                </div>
               

            </div>
        
              

            </div>
        );
    }
}

export default steps;