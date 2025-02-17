import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Daryl B. Pastidio </span>
            from <span className="purple"> Cebu, Philippines.</span>
            <br />
            I am currently working as a sernior software engineer.
            <br />
            <br />
            My experience with <span className="purple">AI and machine learning </span>adds an extra dimension to my development approach, 
            allowing me to create <span className="purple">intelligent solutions</span> that solve complex problems.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Volleyball
            </li>
            <li className="about-activity">
              <ImPointRight /> Socializing with people
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Daryl</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
