import React from "react";
import Separator from "../../common/social-contact/separator/Separator";
import { SkillsData } from "../../data/learn";
import SkillCard from "./SkillCard";
import "./skills.css";

const Skills = () => {
  const data = SkillsData;
  return (
    <div className="skills">
      <Separator />
      <label className="section-title">Skills</label>
      <div className="skills-container">
        {data.map((item, index) => {
          return (
            <div key={index} className="skills-section">
              <label className="skills-section-title">{item.type}</label>
              <div className="skills-list">
                {item.list.map((skill, index) => {
                  return <SkillCard key={index} skill={skill} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
