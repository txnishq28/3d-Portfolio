import React from 'react';

import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text  text-slate-50">
        My <span className="purple-gradient_text font-semibold drop-shadow">Projects</span>
      </h1>

      <p className="mt-5 flex flex-col gap-3 text-slate-50">
        I’ve built a bunch of projects over the years—some for fun, some for learning, and a few that I’m genuinely proud of.
        These are the gems I hold closest to my heart. A lot of them are open source, so if one sparks your curiosity,
        don’t be shy—poke around the code, break things (gently), and drop in your ideas. The more, the merrier!
      </p>

      <div className="flex flex-wrap my-20 gap-16 text-slate-50">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="w-5/6 h-5/6 object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-50">{project.description}</p>
              <div className="mt-5 flex items-center gap-4 font-poppins">
  {project.live && (
    <a
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-blue-600 flex items-center gap-1"
    >
      Live Link
      <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
    </a>
  )}

  {project.source && (
    <a
      href={project.source}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-green-600 flex items-center gap-1"
    >
      Source code
      <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
    </a>
  )}
</div>

            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;
