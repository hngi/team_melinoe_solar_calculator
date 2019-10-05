import React from "react";
import "./Contact.css";
class Contact extends React.Component {
  render() {
    return (
     <div className="container">


        <div className="page-header">
           <h1>CONTACT US</h1>
           <p className="lead"><i> We are one mail away and we would love to hear from you.</i></p>
        </div>
        <br> <br> <hr>


        <div className="row">
            <div className="col-sm-6">
    <form>
        <div className="form-group">
          <label for="formName">Name</label>
          <input type="text" className="form-control" id="formName" placeholder="enter your name">  
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="your@email.com">
         <div className="emailNote"> <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small></div>
        </div>

        <div className="form-group">
            <label for="exampleFormControlTextarea1">Message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        
        <button type="submit" className="btn btn-primary">Send message</button>
      </form>
    </div>

    </div>


</div>
    );
  }
}
​
export default Contact;
