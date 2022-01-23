import React from "react";
import Separator from "../../common/social-contact/separator/Separator";
import { workData } from "../../data/work";
import "./work.css";
import WorkCard from "./WorkCard";

const Work = () => {
  const data = workData;
  return (
    <div className="work">
      <Separator />
      <label className="section-title">Work Experience</label>
      <div className="work-list">
        {data.map((item) => {
          return <WorkCard item={item} />;
        })}
      </div>
    </div>
  );
};

export default Work;
