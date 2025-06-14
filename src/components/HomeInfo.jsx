import React from 'react'
import { Link } from 'react-router-dom'
import {arrow} from '../assets/icons'

const InfoBox = ({ text , link , btnText }) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
        {btnText}
        <img src={arrow} className="w-4 h-4 object-contain"/>
        </Link>
    </div>
)
const renderContent = {
    1:(
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-purple py-4 px-8 text-white mx-5">
        Hi , I am <span className="font-semibold">Tanishq Tiwari</span> and I am a <span className="font-semibold">Software Engineer</span></h1>
    ),
    2:(
        <InfoBox
        text="  I am a Final Year Student at JSS ACADEMY OF TECHNICAL EDUCATION"
        link="/about"
        btnText="Learn More"
        />
       
    ),
    3:(
        <InfoBox
        text=" I have worked with 3 different Organisation and picked up many skills of different Domain along the way"
        link='/projects'
        btnText="My Projects"
        />
    ),
    4:(
        <InfoBox
        text=" Need a project done or looking for a dev? 
        I'm just a few keystrokes away"
        link="/Contact"
        btnText="Contact Me"
        />
    )
}

const HomeInfo = ( {currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo
