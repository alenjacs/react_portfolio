import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Selected work in web engineering and data science.</p>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Work in progress</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        {/* Center the two cols under the tabs */}
                        <Row className="g-4 justify-content-center text-center">
                          <Col xs={12} md={6} lg={5} className="d-flex">
                            <a
                              href="https://github.com/alenjacs/fraud_detection"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="proj-card text-only w-100"
                              aria-label="Open Fraud Detection project on GitHub"
                            >
                              <h4>Fraud Detection</h4>
                              <p>EDA • Streamlit • ML baseline</p>
                            </a>
                          </Col>
                          <Col xs={12} md={6} lg={5} className="d-flex">
                            <a
                              href="https://github.com/khanshairer/GR05-DocuBox-2025-Intersession/blob/main/README.md"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="proj-card text-only w-100"
                              aria-label="Open DocuBox project README"
                            >
                              <h4>DocuBox</h4>
                              <p>Docs manager • Firebase • Encryption</p>
                            </a>
                          </Col>
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <p>Work in progress.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <img className="background-image-right" src={colorSharp2} alt="decorative background" />
    </section>
  );
};
