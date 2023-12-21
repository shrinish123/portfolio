import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import SocialConnect from "../../Assets/Projects/social-connect.png";
import GeoCall from "../../Assets/Projects/geocall.png";
import letsUpsolve from "../../Assets/Projects/letsUpsolve.png";

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
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SocialConnect}
              isBlog={false}
              title="Social Connect"
              description="A FullStack social Media App which includes features like realtime Messaging , notifications like comment and create read update and Delete posts ,and many more exciting features"
              ghLink="https://github.com/shrinish123/MERNSocialMedia"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GeoCall}
              isBlog={false}
              title="GeoCall Web App"
              description = "Built a Web app for sharing locations and real-time messaging and Video Calling, with ReactJS, NodeJS and WebRTC,PeerJS,Socket.io"
              ghLink="https://github.com/shrinish123/GeoCall-"
            //   demoLink="https://the-book-station.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={letsUpsolve}
              isBlog={false}
              title="LetsUpsolve"
              description="A web app to assist you with upsolving Coding contests on codeforces practice for the future contests to get better and improve performance ,and also get insights and Analysis of your current performance on codeforces."
              ghLink="https://github.com/shrinish123/lets-Upsolve"
              demoLink="https://letsupsolve.netlify.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="Realtime Chatbot"
              description="Developed Realtime Chatbot that performs client queries and integrated Socket-io in chat server. Performed authentication for admin using passport.js, express-session and bcrypt enabling the authoritative privileges to perform CRUD operations on selective segments. It was a freelancing project and I procured positive feedback from Client and also received 5 stars contingent to on-time delivery of the product."
              ghLink="https://github.com/shivam-bhadani/Chatbot"
              demoLink="https://shivamchatbotwebsite.herokuapp.com/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictac}
              isBlog={false}
              title="Tic Tac Toe Game"
              description="Developed a Tic Tac Toe Game while I was Learning HTML, CSS, JavaScript."
              ghLink="https://github.com/shivam-bhadani/Tic-Tac-Toed"
              demoLink = "https://shivam-bhadani.github.io/Tic-Tac-Toe/"
            />
          </Col> */}
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
