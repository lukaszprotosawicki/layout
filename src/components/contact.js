import gps from "../img/gps.jpg";
import phone from "../img/phone.jpg";
import mail from "../img/mail.jpg";

function Contact() {
  return (
    <div className="contact_container">
      <span></span>
      <div className="contact_form">
        <div className="container_title">
          {" "}
          <h1>Get In Touch</h1>
          <h2>In order to get in touch use the contact form below</h2>
        </div>
        <div className="container_content">
          <div className="container_left">
            <form className="form" action="">
              {" "}
              <input
                className="input_name"
                type="text"
                placeholder="Name(Required)"
                size="50"
                required
              />
              <input
                type="email"
                placeholder="Email(Required)"
                size="50"
                required
              />
              <input
                type="text"
                placeholder="Subject"
                size="50"
                maxLength="60"
                required
              />
              <textarea
                className="input_message"
                type="text"
                placeholder="Write your message here..."
                required
              />
              <input
                className="button"
                id="button"
                type="submit"
                value="SEND"
              />
            </form>
          </div>
          <div className="container_right">
            <div>
              <p>
                Quisque Hendrerit: purus dapibus, ornare nibh vitae, viverra
                nibh. Fusce vitae aliquam tellus. Proin sit amet volutpat
                libero. Nulla sed nunc et tortor luctus faucibus morbi vitae.{" "}
              </p>
            </div>
            <div className="contact_date">
              <div>
                <img src={gps} alt="gps" />
                <p> Elm St. 14/05 Lost City</p>
              </div>
              <div>
                <img src={phone} alt="phone" />
                <p>+ 3528 331 86 35</p>
              </div>
              <div>
                <img src={mail} alt="mail" />
                <p>info@hexa;corp.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span></span>
    </div>
  );
}

export default Contact;
