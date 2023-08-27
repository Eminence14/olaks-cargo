import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <section className="form-wrapper">
      <div className="form-container">
        <h4>REQUEST A QUICK QUOTE</h4>
        <form>
          <div>
            <label htmlFor="name">YOUR NAME</label>
            <input type="text" id="name" placeholder="Your Name" />
          </div>
          <div>
            <label htmlFor="subject">SUBJECT</label>
            <input type="text" id="subject" placeholder="Subject" />
          </div>
          <div>
            <label htmlFor="email">EMAIL ADDRESS</label>
            <input type="email" id="email" placeholder="Email Address" />
          </div>
          <div>
            <label htmlFor="phone">PHONE</label>
            <input type="phone" id="phone" placeholder="Phone" />
          </div>
          <div className="flexCol message-rec">
            <label htmlFor="service">SERVICE</label>
            <select id="service">
              <option value="Service 1">Service 1</option>
              <option value="Service 2">Service 2</option>
              <option value="Service 3">Service 3</option>
              <option value="Service 4">Service 4</option>
              <option value="Service 5">Service 5</option>
            </select>
          </div>
          <div className="flexCol message-rec">
            <label htmlFor="message">MESSAGE</label>
            <textarea id="message" rows={10} placeholder="Message"></textarea>
          </div>
          <button className="button" type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Form;
