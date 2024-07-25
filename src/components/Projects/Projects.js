import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import gro from "../../Assets/Projects/gro.jpg";
import to from "../../Assets/Projects/to.jpeg";
import y from "../../Assets/Projects/y.webp";
import tic from "../../Assets/Projects/tic.png";

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
              imgPath={y}
              isBlog={false}
              title="Youtube clone"
              description="I developed a YouTube clone using React, featuring a responsive video player, powerful search functionality, video recommendations, and support for comments and likes. The app utilizes React Router for seamless navigation and Axios for fetching video data, all while maintaining a responsive design with Tailwind and Material-UI. This project showcases my ability to build dynamic, user-friendly web applications with modern technologies."
              ghLink="https://github.com/PulkitKumar238/YoutubeClone"
              demoLink="https://alpha-youtube.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tic}
              isBlog={false}
              title="Tic-Tac-Toe"
              description="I developed a Tic Tac Toe game using JavaScript, featuring a sleek, interactive interface that allows two players to compete. The game includes logic to determine the winner and handles edge cases such as draws. It dynamically updates the UI based on player moves and provides a reset option to start a new game."
              ghLink="https://github.com/PulkitKumar238/Tic-Tac-Toe"
              demoLink="https://tic-tac-toe-ctcf.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={to}
              isBlog={false}
              title="To-Do-List"
              description="I developed a To-Do List application using React, featuring an intuitive interface where users can add, edit, and delete tasks. The app supports task prioritization, due dates, and allows users to mark tasks as completed. It dynamically updates the task list and provides persistent storage using local storage to save tasks across sessions.."
              ghLink="https://github.com/PulkitKumar238/to-do-list"
              demoLink="https://to-do-list-nzsl32xz6-pulkitkumar238s-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gro}
              isBlog={false}
              title="Grocery Shop"
              description="I developed a Grocery Shop website using just HTML and CSS as a learning project, featuring a clean, user-friendly layout to display products and their details. The site includes well-organized sections for different categories, a navigation bar for easy browsing, and visually appealing design elements to enhance the user experience. This project demonstrates my foundational skills in web development and my ability to create structured, aesthetically pleasing web pages using HTML and CSS"
              ghLink="https://github.com/PulkitKumar238/Grocery-Shop"
              demoLink="https://grocery-shop-coral.vercel.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
