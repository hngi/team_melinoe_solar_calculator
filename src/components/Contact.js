import React from "react";
import "./Contact.css";
class Contact extends React.Component {
  render() {
    return (
     <div class="container">


        <div class="page-header">
           <h1>CONTACT US</h1>
           <p class="lead"><i> We are one mail away and we would love to hear from you.</i></p>
        </div>
        <br> <br> <hr>


        <div class="row">
            <div class="col-sm-6">
    <form>
        <div class="form-group">
          <label for="formName">Name</label>
          <input type="text" class="form-control" id="formName" placeholder="enter your name">  
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="your@email.com">
         <div class="emailNote"> <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small></div>
        </div>

        <div class="form-group">
            <label for="exampleFormControlTextarea1">Message</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        
        <button type="submit" class="btn btn-primary">Send message</button>
      </form>
    </div>

    </div>


</div>
    );
  }
}
​
export default Contact;
