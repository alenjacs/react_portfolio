import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  // EmailJS 
  const EMAILJS_SERVICE_ID = "service_9v5iumc";
  const EMAILJS_TEMPLATE_ID = "template_01oc4kg";
  const EMAILJS_PUBLIC_KEY = "5Tk5Nz1yXLbk8DF7d";
 

  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({ success: null, message: "" });

  const onFormUpdate = (category, value) => {
    setFormDetails((prev) => ({ ...prev, [category]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formDetails.email || !formDetails.message) {
      setStatus({ success: false, message: "Email and message are required." });
      return;
    }

    setButtonText("Sending…");
    setStatus({ success: null, message: "" });

    try {
      // Map state -> template variables
      const templateParams = {
        to_email: "alenjacs@gmail.com",
        from_email: formDetails.email,
        from_name: `${formDetails.firstName} ${formDetails.lastName}`.trim(),
        phone: formDetails.phone || "—",
        message: formDetails.message,
        subject: "Portfolio contact form",
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      setStatus({ success: true, message: "Message sent successfully." });
      setFormDetails(formInitialDetails);
    } catch (err) {
      console.error(err);
      setStatus({
        success: false,
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setButtonText("Send");
    }
  };

  return (
    <>
      <section className="contact" id="connect">
        <Container>
          <Row className="align-items-center">
            <Col size={12} md={6}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <img
                    className={isVisible ? "animate__animated animate__zoomIn" : ""}
                    src={contactImg}
                    alt="Contact"
                  />
                )}
              </TrackVisibility>
            </Col>
            <Col size={12} md={6}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <h2>Let us connect.</h2>
                    <form onSubmit={handleSubmit}>
                      <Row>
                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="text"
                            placeholder="First Name"
                            value={formDetails.firstName}
                            onChange={(e) => onFormUpdate("firstName", e.target.value)}
                          />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="text"
                            placeholder="Last Name"
                            value={formDetails.lastName}  // fixed typo
                            onChange={(e) => onFormUpdate("lastName", e.target.value)}
                          />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="email"
                            placeholder="Email Address"
                            value={formDetails.email}
                            onChange={(e) => onFormUpdate("email", e.target.value)}
                          />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="tel"
                            placeholder="Phone No."
                            value={formDetails.phone}
                            onChange={(e) => onFormUpdate("phone", e.target.value)}
                          />
                        </Col>
                        <Col size={12} className="px-1">
                          <textarea
                            rows="6"
                            placeholder="Message"
                            value={formDetails.message}
                            onChange={(e) => onFormUpdate("message", e.target.value)}
                          />
                          <button type="submit">
                            <span>{buttonText}</span>
                          </button>
                        </Col>

                        {status.message ? (
                          <Col>
                            <p className={status.success ? "success" : "danger"}>
                              {status.message}
                            </p>
                          </Col>
                        ) : null}
                      </Row>
                    </form>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
