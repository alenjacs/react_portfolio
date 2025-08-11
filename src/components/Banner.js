// src/components/Banner.js
import 'loaders.css/loaders.min.css';
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/mun_orange.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "exe", "ca", "png","jpeg" ];
  const period = 2000;

  useEffect(() => {
    const ticker = setInterval(() => { tick(); }, delta);
    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) setDelta(prev => prev / 2);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prev => prev - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prev => prev + 1);
    }
  };

  const handleConnectClick = () => {
    const subject = encodeURIComponent("Hello from your portfolio");
    const body = encodeURIComponent("Hi Alen,\n\n");
    window.location.href = `mailto:alenjacs@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome!</span>
                  <h1>
                    {`I'm Alen.`}
                    {/* fix dataPeriod -> data-period to remove React warning */}
                    <span className="txt-rotate" data-period="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'>
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>

                  <ul style={{ paddingLeft: "1.2rem", marginBottom: "1rem" }}>
                    <li>Currently pursuing a Bachelor of Science degree</li>
                    <li>
                      Studying at&nbsp;
                      <a
                        href="https://www.mun.ca/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "hotpink", textDecoration: "none", fontWeight: 600 }}
                      >
                        Memorial University of Newfoundland
                      </a>
                    </li>
                    <li>Double major in Computer Science and Data Science</li>
                  </ul>

                  <button className="connect-btn" onClick={handleConnectClick} aria-label="Compose an email to Alen">
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              }
            </TrackVisibility>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div>
                  {/* subtle one-time reveal, no bounce */}
                  <img
                    src={headerImg}
                    alt="Header"
                    className={isVisible ? "header-img header-appear" : "header-img"}
                  />
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
