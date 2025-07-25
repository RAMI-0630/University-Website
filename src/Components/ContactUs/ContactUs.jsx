import React from "react";
import "./ContactUs.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
const ContactUs = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "19c2a48e-0061-4dab-8b35-22128123b9b3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send Inquiry <img src={msg_icon} alt="" />
        </h3>
        <p>
          Send us a message with your questions or feedback. We’d love to hear
          from you.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            Contact@greet.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +251945665544
          </li>
          <li>
            <img src={location_icon} alt="" />
            Nech Sar Campus, Arba Minch, Ethiopia{" "}
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label htmlFor="phoneNum">Phone Number</label>
          <input
            type="tel"
            id="phoneNum"
            name="phoneNum"
            placeholder="Enter your mobile number"
            required
          />
          <label htmlFor="msg">Write your message here</label>
          <textarea
            name="msg"
            id="msg"
            rows={6}
            placeholder="Enter yor message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default ContactUs;
