import React from "react";
import Separator from "../../common/social-contact/separator/Separator";
import { ProjectData } from "../../data/project";
import ProjectCard from "./ProjectCard";
import "./projects.css";

const Projects = () => {
  const data = ProjectData;
  return (
    <div className="projects">
      <Separator />
      <label className="section-title">Projects</label>
      <div>
        {data.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
