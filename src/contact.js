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
      <form
        name="contact v2"
        method="post"
        data-netlify="true"
        onSubmit="submit"
        action="/success/"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact v2" />

        <div hidden>
          <input name="bot-field" />
        </div>

        <div>
          <label>
            First name
            <br />
            <input type="text" name="first-name" />
          </label>
        </div>

        <div>
          <label>
            Last name
            <br />
            <input type="text" name="last-name" />
          </label>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input id="email" type="email" name="email" />
        </div>

        <div>
          <label>
            Any Comments?
            <br />
            <textarea name="comments"></textarea>
          </label>
        </div>

        <button type="submit">Submit The Results</button>
      </form>
    </div>
  );
}

export default Contact;
