import React from 'react';
import './generic-page.css';
import Github from '../../icons/components/github.svg';
import LinkedIn from '../../icons/components/linkedin.svg';
import Avatar from '../../icons/components/avatar-fides-escalona.jpg';

const Home = () => (
  <div className="Page">
    <img className="avatar" src={Avatar} alt="Avatar"/>
    <h1>Fides Gerardo Escalona Molina</h1>
    <h2>Software Engineer</h2>
    <div className="socialIcons">
      <a href="https://github.com/fgescalona" target="_blank">
        <img src={Github} alt="Github Account"/>
      </a>
      <a href="https://www.linkedin.com/in/fidesescalona/" target="_blank">
        <img src={LinkedIn} alt="LinkedIn Account"/>
      </a>
    </div>
  </div>
)

export default Home