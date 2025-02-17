import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming when I discovered its power to transform ideas into reality, 
              and I've been on an exciting journey of continuous learning ever since... 🚀
              <br />
              <br />I am fluent in modern tech stacks, specializing in              
              <i>
                <b className="purple"> JavaScript/TypeScript, Python, and Java. </b>
              </i>
              , with a proven track record of building high-performance applications that make a real impact. 
              <br />
              <br />
              My expertise spans both frontend and backend development, &nbsp;
              <i>
                <b className="purple">having reduced load times by 30% and boosted user engagement by 45% in previous projects. </b>
                <br/><br/>
                My field of interest lies in crafting{" "}
                <b className="purple">
                  innovative web solutions and AI-powered applications
                </b>
              </i>
              I thrive on architecting scalable systems and implementing cutting-edge solutions that push technological boundaries.
              <br />
              <br />
              Whenever possible, I leverage my expertise in
              with <b className="purple">Spring Boot</b>, <b className="purple">Node.js</b> and <b className="purple">Django</b> modern JavaScript frameworks like 
              <i>
                <b className="purple">
                  {" "}
                  React, Next.js, and Vue.js 
                </b>
              </i>
              to build robust, user-centric applications.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">contact </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/DarylPastidio"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/daryl-b-pastida32343/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
