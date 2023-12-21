import React from "react";
import Card from "react-bootstrap/Card";
import { FaStar } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Shrinish Vhanbatte </span>
            from <span className="purple"> Maharashtra, India.</span>
            <br />I am a final year undergraduate at IIT Kharagpur.
            <br />
            <br />
            Some of my Achievements:
          </p>
          <ul>
            <li className="about-activity">
              <FaStar /> Achieved Highest Rating of 2140 on <a className="purple" style={{ "textDecoration": "none" }}  rel="noreferrer" href="https://leetcode.com/bhatte/" target={"_blank"} >Leetcode</a>
            </li>
            <br/>
            <li className="about-activity">
              <FaStar /> Global Rank 865 in Google Kickstart Round H 2022 and Global Rank 1531 in Meta HackerCup 2023.
            </li>
            <br/>
            <li className="about-activity">
              <FaStar /> Achieved Highest Rating of 1825 (4 Star) on <a className="purple" style={{ "textDecoration": "none" }} rel="noreferrer" href="https://www.codechef.com/users/bhatte" target={"_blank"}>CodeChef</a> and max rating of 1440 (Specialist) on <a className="purple" style={{ "textDecoration": "none" }} rel="noreferrer" href="https://codeforces.com/profile/bhatte" target={"_blank"}>Codeforces</a>.
            </li>
            <br/>
            <li className="about-activity">
              <FaStar /> Won Gold in InterIIT Tech Meet 10.0 - Mercari Large Scale System Design Hackathon 2022.
            </li>
            <br/>
            <li className="about-activity">
              <FaStar /> Won Best Features Prize (Notifications) in Website Hackathon oraganized by TSG, IIT Kharagpur.
            </li>
            <br/>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
