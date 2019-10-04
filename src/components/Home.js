import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">

  {/* For technician form  */}

        <nav>
          <ul>
            <li class="register">
              <a href="#secondary-wrap">Register as a Technicians</a>
            </li>
          </ul>
        </nav>
        <div class="main-wrap">
          <h1>Melineo Solar Calculator</h1>

          <h4 class="calc-text">
            Calculate how much solar power your home requires by just providing
            the amps and hours per day for each appliances
          </h4>

          <Link to="/Calculator" class="get-started">
            Get Started
          </Link>
        </div>
        <div class="secondary-wrap" id="secondary-wrap">
          <div class="paragraph">
            <p class="p1">Are you a technician? </p>
            <p class="p2">
              We can help get to your potential customers by registering on our
              platform.
            </p>
          </div>
          <div class="row">
            <div class="col-1-of-2"></div>
            <div class="col-2-of-2">
              <form class="form-reg">
                <input
                  type="name"
                  name="txtFullName"
                  placeholder="Full Name"
                  class="fullname"
                  required
                ></input>
                <input
                  type="email"
                  name="txtEmail"
                  placeholder="Email"
                  class="email"
                  required
                ></input>
                <input
                  type="text"
                  name="number"
                  placeholder="Phone Number"
                  class="phone-number"
                  required
                ></input>
                <input
                  type="text"
                  name="text"
                  placeholder="Address"
                  class="address"
                  required
                ></input>

                <button class="button">Submit</button>
              </form>
            </div>
          </div>
        </div>

        {/* Ends Here */}

      </div>
    );
  }
}

export default Home;
