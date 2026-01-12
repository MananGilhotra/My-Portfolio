import React from 'react'
import "./About.css"
import Hole from "../../ui/Hole"
import { skills } from '../../data'
import CardUi from "../../assets/CardUi"

const About = () => {
  return (
    <section id='about'>
      <div className="card section__wrapper">
        <Hole />
        <div className="column left-column">
          <h3 className="skill__title">My Skills</h3>
          <div className="skills__container">
            {skills.map((skill, index) => (
              <div className="flex skill__group" key={index}>
                {skill.data.map((list, key) => (
                  <div className="blur__overlay flex__center skill" key={key}>
                    <div className="skill__logo">
                      <img src={list.logo} alt="" />
                    </div>
                  </div>
                ))}
              </div>
            ))}

          </div>
          <CardUi className="card__ui-item" color={"var(--color-primary)"} />
        </div>
        <div className="column right-column">
          <h2 className="shine">About Me</h2>
          <h1 className="title">
            I am <span className="color__primary">Manan Gilhotra</span>
          </h1>
          <p className="text__muted description">
            Currently pursuing B.Tech in CS and DS at Newton School of Technology.
            Passionate full stack developer with hands-on experience in building responsive, scalable, and user-friendly web applications.
            Proficient in the MERN stack (MongoDB, Express.js, React, Node.js) along with HTML, CSS, JavaScript, and Tailwind CSS.
            I specialize in developing end-to-end solutions from intuitive front-end interfaces to robust back-end systems,
            ensuring seamless user experiences and high-performance applications.
          </p>
        </div>
      </div>

    </section>
  )
}

export default About


