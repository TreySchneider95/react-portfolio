import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { 
          id: "HTML5_skill",
          content: "HTML5",
          porcentage: "80%",
          value: "80" 
        },
        { 
          id: "CSS3_skill",
          content: "CSS3",
          porcentage: "75%",
          value: "75" 
        },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "95%",
          value: "95"
        },
        { 
          id: "Express_skill",
          content: "Express",
          porcentage: "80%",
          value: "80" 
        },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "Python_skill",
          content: "Python",
          porcentage: "95%",
          value: "95"
        },
        {
          id: "Django_skill",
          content: "Django",
          porcentage: "85%",
          value: "85"
        },
        {
          id: "Flask_skill",
          content: "Flask",
          porcentage: "75%",
          value: "75"
        },
        {
          id: "AWS_skill",
          content: "AWS",
          porcentage: "70%",
          value: "70"
        },
        {
          id: "SQL_skill",
          content: "SQL",
          porcentage: "60%",
          value: "60"
        },
        {
          id: "NoSQL_skill",
          content: "NoSQL",
          porcentage: "60%",
          value: "60"
        },
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "My experience in developing web applications spans various technologies, including Python, Django, Flask, React, and Express. I have a proven track record of successfully designing, building, and deploying web solutions that meet clients' needs and drive business growth. My proficiency in both SQL and NoSQL databases allows me to create efficient and scalable database structures, ensuring optimal performance for web applications."
        },
        {
          id: "second-p-about",
          content:
            "Some highlights of my qualifications include:"
        },
        {
          id: "third-p-about",
          content:
            "Python Django Expertise: I have worked extensively with Django to create robust and secure web applications. My experience includes designing RESTful APIs, implementing authentication systems, and optimizing database queries for improved performance."
        },
        {
          id: "fourth-p-about",
          content:
            "Front-End Development: I have hands-on experience with JavaScript, React, and other front-end technologies, allowing me to create responsive and user-friendly interfaces that enhance the user experience."
        },
        {
          id: "fith-p-about",
          content:
            "Back-End Development: My skills in Flask and Express enable me to develop server-side logic and APIs that seamlessly interact with the front-end, ensuring a smooth end-to-end user experience."
        },
        {
          id: "sixth-p-about",
          content:
            "Database Management: I am well-versed in both SQL and NoSQL databases, enabling me to choose the right database technology for each project and design efficient data models."
        },
        {
          id: "seventh-p-about",
          content:
            "In addition to my technical skills, my background in the Navy has instilled in me a strong sense of teamwork and collaboration. During my service, I had the privilege of working within diverse teams where effective communication, problem-solving, and adaptability were paramount. These experiences have equipped me with the ability to collaborate effectively with cross-functional teams, even in high-pressure environments. Moreover, my time as a controls engineer honed my ability to work independently and take initiative, ensuring that I can tackle challenges autonomously and deliver results in a timely manner."
        },
        {
          id: "eighth-p-about",
          content:
            "I am genuinely passionate about web development and staying up-to-date with the latest industry trends and best practices. My ability to quickly adapt to new technologies and my commitment to writing clean, maintainable code have been key factors in my professional success."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
