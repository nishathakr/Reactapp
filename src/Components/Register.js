import React from "react";
import "semantic-ui-css/semantic.min.css";
import "./Register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="form-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-offset-6 col-md-12 col-sm-offset-6 col-sm-12">
            <div className="form-container">
              <h3 className="title">Create an account</h3>
              <h6>It only takes a couple of minutes to get started</h6>

              <div className="social-links">
                <a href="#">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
                <a href="#">
                  <i className="fab fa-facebook-f"></i> Facebook
                </a>
              </div>
              <br />
              <form className="form-vertical">
                <div className="form-group">
                  <label className="float-left">Upload Resume</label>
                  <input className="form-control" type="text" />
                </div>
                <div className="form-group">
                  <label className="float-left">User Name</label>
                  <input className="form-control" type="text" />
                </div>
                <div className="form-group">
                  <label className="float-left">Email</label>
                  <input className="form-control" type="email" />
                </div>
                <div className="form-group">
                  <label className="float-left">Password</label>
                  <input className="form-control" type="password" />
                </div>
                <div className="form-group">
                  <label className="float-left">Phone No.</label>
                  <input className="form-control" type="number" />
                </div>
                <div className="form-group">
                  <label className="float-left">Gender</label>
                  <input className="form-control" type="text" />
                </div>
                <div>
                <button className="btn btn-primary">Continue</button>
                </div>
                <span className="user-login">   
                  Already have an account? Click Here to{" "}
                  <Link to="/login">Login</Link>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
