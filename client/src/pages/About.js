import React from 'react';
import './assets/css/about.css';
import { Icon } from '@iconify/react';

const About = () => {
  const team = [
    {
      name: 'Yogita Beniwal',
      src: require('./assets/images/yogita.jpg'),
      email: 'beniwalyogita07@gmail.com',
      href: 'https://github.com/yogitaabeniwal',
    },
    {
      name: 'Uditi Arya',
      src: require('./assets/images/uditi.jpg'),
      email: 'uditiarya3112@gmail.com',
      href: 'https://github.com/Uditi-Arya',
    },
    {
      name: 'Antra Chauha',
      src: require('./assets/images/antra.jpg'),
      email: 'thakurantra2004@gmail.com',
      href: 'https://github.com/Antra2004',
    },
  ];

  return (
    <section className="team-main">
      <h1>
        Calculate your first Carbon <span>Footprint</span> with us
      </h1>
      <div className="about-info">
        <div className="about-p">
          <div className="about-h3">
            With <strong>EarthPrint</strong>, we believe that small actions can create a big impact for a sustainable planet.
          </div>
          <p>
            We are a team of passionate full-stack developers dedicated and AI/ML Engineers to building a platform
            that helps individuals understand, track, and reduce their carbon footprint through
            daily habits and actionable insights. Our goal is to empower users to make informed
            choices for a cleaner and greener tomorrow.
          </p>

          <div className="about-h3">
            We believe that awareness and action together can drive meaningful change.
          </div>
          <p>
            By combining data, personalization, and intuitive design, <strong>EarthPrint</strong>
            helps users see the direct impact of their lifestyle on the environment and motivates
            them to adopt sustainable habits — one step at a time.
          </p>

          <p>
            This project is a part of our major development initiative, created using
            modern technologies like <strong>React.js</strong>, <strong>Apollo Server</strong>,
            and <strong>GraphQL API</strong>. Feel free to reach out to our team or explore
            our GitHub repository to learn more about our work and contributions.
          </p>
        </div>
      </div>

      <div className="team-info">
        {team.map((teammate) => (
          <div className="team-container" key={teammate.name}>
            <h2>{teammate.name}</h2>
            <img
              src={teammate.src}
              alt={teammate.name}
              style={{ width: 200 }}
            ></img>
            <div className="links-row">
              <div className="links-col">
                <a href="mailto:{teammate.email}">
                  <h3>
                    <Icon icon="clarity:email-line" color="#243B4A" />
                  </h3>
                </a>
              </div>
              <div className="links-col">
                <a
                  href={teammate.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h4>
                    <Icon icon="akar-icons:github-fill" color="#243B4A" />
                  </h4>
                </a>
              </div>
            </div>
            <br />
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
