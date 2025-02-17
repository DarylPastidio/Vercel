import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatbot from "../../Assets/Projects/SSW_Chatbot.JPG";
import ecommerce from "../../Assets/Projects/Electronics_Online_Store.JPG"
import storage_pic from "../../Assets/Projects/Opacity Storage.JPG"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center"}}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="SSW Website(AI chatbot development)"
              description="Created an AI-driven chatbot that assists users with common inquiries and support requests, improving response times and user engagement. Utilized natural language processing (NLP) to enhance interaction quality."
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Electronics Online Store"
              description="Developed a full-featured e-commerce platform that allows users to browse products, manage their shopping carts, and complete transactions securely. Integrated payment gateways and implemented user authentication for a seamless shopping experience."
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={storage_pic}
              isBlog={false}
              title="Opacity Storage"
              description="Developed a decentralized cloud storage platform that prioritizes user privacy and security. Opacity allows users to store files anonymously without requiring personal information. The platform employs end-to-end encryption, ensuring that files are secure from unauthorized access. Users can pay for storage using OPQ tokens, facilitating a seamless and private transaction process. The service aims to provide a familiar user experience akin to traditional cloud storage providers while enhancing online data privacy."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
