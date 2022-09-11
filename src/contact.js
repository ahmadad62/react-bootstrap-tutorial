import "bootstrap/dist/css/bootstrap.min.css";
// import { Alert, Button, Input } from "react-bootstrap";

function Contact() {
  const formStyles = {
    display: "flex",
    flexDirection: "column",
    margin: "48px",
  };

  return (
    <div className="Contact">
      <form style={formStyles} name="contact" action="/contact" method="post">
        <input type="hidden" name="forma-name" value="contact" />
        <input required type="text" name="name" placeholder="Your Name" />
        <input required type="email" name="email" placeholder="Your Email" />
        <textarea
          required
          name="message"
          placeholder="Please enter your Message"
          col="30"
          rows="10"
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
