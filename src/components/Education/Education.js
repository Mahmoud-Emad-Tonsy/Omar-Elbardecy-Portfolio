import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import './Education.css'
import EducationCard from './EducationCard';

import eduImg from "../../assets/imgs/eduImg.png"

import { educationData } from '../../data/educationData'

function Education() {

    const { theme } = useContext(ThemeContext);
    return (
      <div
        className="education"
        id="resume"
        style={{ backgroundColor: theme.secondary }}>
        <div className="education-body">
          <div className="education-description">
            <h1 style={{ color: "#164863" }}>Education</h1>
            {educationData.map((edu) => (
              <EducationCard
                key={edu.id}
                id={edu.id}
                institution={edu.institution}
                course={edu.course}
                startYear={edu.startYear}
                endYear={edu.endYear}
              />
            ))}
          </div>
          <div className="education-image">
            <img src={eduImg} alt="" />
          </div>
        </div>
      </div>
    );
}

export default Education
