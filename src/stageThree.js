import React from "react";
import "./App.css";

class stageThree extends React.Component {
    constructor(props) {
        super(props)
        this.state = {  };
    }
    render() {
        return (
            <div className="features">
                 <h3 className="feature-header"> Features</h3>
                <div className="row">
              <div className="col-sm-4">
              <div className="card" >
           
            <div className="card-body">
            <img className="first-image img-responsive" src={"images/jumbo.jpg"}/>
            <h5>Automated taxes</h5>
        <p className="card-text">All local, state and federal payroll taxes are calculated, filed, and paid automatically.
.</p>
         </div>
              </div>
            
                </div>
                <div className="col-sm-4">
              <div className="card" >
           
            <div className="card-body">
            <img className="first-image img-responsive" src={"images/feat.jpg"}/>
            <h5>Payroll on AutoRun</h5>
        <p className="card-text">You can set payroll to run automatically each pay period. Nice!.</p>
         </div>
              </div>
            
                </div>

                <div className="col-sm-4">
              <div className="card" >
           
            <div className="card-body">
            <img className="first-image img-responsive" src={"images/feat1.jpg"}/>
            <h5>Flexible payment schedules</h5>
        <p className="card-text">Pay your team weekly, bi-weekly, twice a month, or monthly.</p>
         </div>
              </div>
            
                </div>
               

            </div>
        
            </div>
            
        );
    }
}

export default stageThree;