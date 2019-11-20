import React , {Component} from "react";
import "./App.css";

class sliders extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="sliders">
                <h3 className="sliders-header">Other features</h3>
                <div className="bd-example">
  <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="payroll" src={"images/payroll.jpg"}/>
        <div className="carousel-caption d-none d-md-block">
          <h3>Unlimited payrolls</h3>
          <h5>Run payroll as many times as you need.</h5>
        </div>
      </div>
      <div className="carousel-item">
      <img className="payroll" src={"images/accounting.jpg"}/>
        <div className="carousel-caption d-none d-md-block">
          <h3>Accounting integrations</h3>
          <h5>Gusto integrates with QuickBooks, Xero, and FreshBooks.</h5>
        </div>
      </div>
      <div className="carousel-item">
      <img className="payroll" src={"images/Reports.jpg"}/>
        <div className="carousel-caption d-none d-md-block">
          <h3>Payroll reports</h3>
          <h5>Generate and download reports for payroll history, bank transactions, contractor payments, paid time off, tax payments, and more.</h5>
        </div>
      </div>
      <div className="carousel-item">
      <img className="payroll" src={"images/direct.png"}/>
        <div className="carousel-caption d-none d-md-block">
          <h3>Direct deposit</h3>
          <h5>Your employees’ paychecks go straight to their bank accounts.</h5>
        </div>
      </div>
      <div className="carousel-item">
      <img className="payroll" src={"images/setup.jpg"}/>
        <div className="carousel-caption d-none d-md-block">
          <h3>No payroll setup fees</h3>
          <h5>Our easy-to-use software and helpful support team are here to help you get started.</h5>
        </div>
      </div>
      <div className="carousel-item">
      <img className="payroll" src={"images/mobil.png"}/>
        <div className="carousel-caption d-none d-md-block">
          <h3>Mobile</h3>
          <h5>Access your account and run payroll any time on your smartphone or tablet.</h5>
        </div>
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
</div>


            </div>
        );
    }
}

export default sliders;