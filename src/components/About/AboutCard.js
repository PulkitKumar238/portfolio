import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pulkit Kumar </span>
            from <span className="purple"> Lucknow(UP), India.</span>
            <br />
            I am currently pursuing a  <span className="purple"> BTech in Computer Science and Engineering</span>
             at  <span className="purple"> KIET Group of Institutions, Ghaziabad.</span>
            <br />
            I have achieved several milestones in my academic and professional
            journey. I have been accepted as a fellow in  <span className="purple"> Headstarter</span>, developed
            many  <span className="purple"> front end projects</span> and have a strong grasp of  <span className="purple"> Data Structures and Algorithms</span>,
            having solved 300+ questions on various platforms like LeetCode, CodeChef,
            and Codeforces.
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
