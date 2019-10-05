import React from "react";
import "./Register.css";
class Register extends React.Component {
  render() {
    return (
      
        // For technician form

        <div className="secondary-wrap" id="secondary-wrap">
          <div className="paragraph">
            <p className="p1">Are you a technician? </p>
            <p className="p2">
              We can help get to your potential customers by registering on our
              platform.
            </p>
          </div>
          <div className="row">
            <div className="col-1-of-2"></div>
            <div className="col-2-of-2">
              <form className="form-reg">
                <input
                  type="name"
                  name="txtFullName"
                  placeholder="Full Name"
                  className="fullname"
                  required
                ></input>
                <input
                  type="email"
                  name="txtEmail"
                  placeholder="Email"
                  className="email"
                  required
                ></input>
                <input
                  type="text"
                  name="number"
                  placeholder="Phone Number"
                  className="phone-number"
                  required
                ></input>
                <input
                  type="text"
                  name="text"
                  placeholder="Address"
                  className="address"
                  required
                ></input>

                <button className="button">Submit</button>
              </form>
            </div>
          </div>
        </div>

        // Ends Here 

    );
  }
}

export default Register;
