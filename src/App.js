import React from 'react';
import './App.css';
import Header from './Header';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import ReactPlayer from 'react-player';

function App() {

  const games = [
    { id: 1, name: "GUNSLINGER", description: "Gunslinger is a PC-based 3D multiplayer graduation project developed with Unity and Fish-Networking." , link: "https://youtu.be/Ed4ykapxiEA"},
    { id: 2, name: "DEEP BLUE RESCUE", description: "DeepBlueRescue is a term project prepared using WebGL 2.0, Babylon.js.", link: "https://youtu.be/eTMpvOQPefA" },
    { id: 3, name: "SAVITY RUN", description: "SavityRun is a gamified test version of the training provided on occupational health and safety topics.",link:"https://youtu.be/nK8w8SL1ScY" },
    // Diğer oyunlar
  ];

  const education = [
    {
      id: 1,
      university: "Hacettepe University",
      department: "Computer Engineering",
      degree: "Bachelor's Degree",
      years: "2020-2024",
      transcriptLink: "https://drive.google.com/file/d/1nUGFyVPglsw7Eh47qOkidQ3CSIMznEe-/view?usp=drive_link"
    }
  ];

  return (
    <div className="App">
      
      <div className='intro-container'>
        <div className="intro">
          <h1>BEDRA GÖKSU</h1>
          <p>Computer Engineer, <a className='header-link' href="https://drive.google.com/file/d/1r5mC16MSjDAng9OztYajwxRl0T1Gsulu/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Resume</a></p>
          
        </div>
      </div>
      
      <Header />
      {/* Yaldız efekti için elementler */}
      <div className="sparkle"></div>
      <div className="sparkle"></div>
      <div className="sparkle"></div>
      <div className="sparkle"></div>
      <div className="sparkle"></div>
      <div className="sparkle"></div>
      <div className="sparkle"></div>
      <div className="sparkle"></div>
      <div className="sparkle"></div>
      <div className="sparkle"></div>
      <div className="sparkle"></div>
      <div className="sparkle"></div>

      <div id="portfolio" className="game-list"></div>
      {games.map(game => (
        <div key={game.id} className="game-card">
          <h2>{game.name}</h2>
          <div className='video-wrapper'>
            <ReactPlayer url={game.link} controls={true} />
          </div>
          <p>{game.description}</p>
        </div>
      ))}

      
      <div id="education" className="education-timeline">
        <h2>Education</h2>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Bachelor's Degree</h3>
            <p>Hacettepe University</p>
            <p>Computer Engineering</p>
            <a href="https://drive.google.com/file/d/1nUGFyVPglsw7Eh47qOkidQ3CSIMznEe-/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Transcript</a>
          </div>
        </div>
      </div>


      <div id="contact" className="contact-icons">
        <a href="mailto:bedragoksu@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </a>
        <a href="https://github.com/bedragoksu" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/bedragoksu" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
      
      <div className='mail'>
          bedragoksu@gmail.com
      </div>

    </div>
  );
}

export default App;
