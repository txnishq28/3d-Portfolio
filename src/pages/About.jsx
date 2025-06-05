import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { skills , experiences, socialLinks } from "../constants";
import React from "react";
import CTA from '../components/CTA';
const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text  text-slate-50">
      Hello , I'm <span className="purple-gradient_text font-semibold drop-shadow ">Tanishq Tiwari</span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-50">
        <p>
        A Software Engineer specializing in full-stack development, Data science, and Real-time applications. I’m passionate about building scalable solutions, optimizing performance, and leveraging technology to solve real-world problems.
        </p>
      </div>

<div className="py-10 flex flex-col">
  <h3 className="subhead-text purple-gradient_text font-semibold drop-shadow ">My Socials</h3>
  <div className="mt-16 flex flex-wrap gap-12">
    {socialLinks.map((link, index) => (
      link.link ? (
        <a
          key={index}
          href={link.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block-container w-20 h-20"
        >
          <div className="btn-back rounded-xl"></div>
          <div className="btn-front rounded-xl flex justify-center items-center">
            <img
              src={link.imageUrl}
              alt={link.name}
              className={`object-contain ${
                link.name === 'LeetCode' ? 'w-4/5 h-4/5' : 'w-1/2 h-1/2'
              }`}
            />
          </div>
        </a>
      ) : (
        <div key={index} className="block-container w-20 h-20">
          <div className="btn-back rounded-xl"></div>
          <div className="btn-front rounded-xl flex justify-center items-center">
            <img
              src={link.imageUrl}
              alt={link.name}
              className={`object-contain ${
                link.name === 'LeetCode' ? 'w-4/5 h-4/5' : 'w-1/2 h-1/2'
              }`}
            />
          </div>
        </div>
      )
    ))}
  </div>
</div>


      <div className="py-10 flex flex-col">
        <h3 className="subhead-text purple-gradient_text font-semibold drop-shadow"> My Skills </h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20">
            <div className="btn-back rounded-xl"/>
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src = {skill.imageUrl}
                  alt = {skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-15">
        <h3 className="subhead-text purple-gradient_text font-semibold drop-shadow">Work Experience</h3>
          <div className="mt-5 flex flex-col gap-3 text-slate-50">
            <p>
            I’ve had the opportunity to work with several organizations, where I continuously enhanced my skills and collaborated with talented, dedicated individuals. These experiences have shaped my journey as a software engineer, helping me grow both professionally and personally. Here’s a detailed rundown of my experiences, contributions, and the impact I’ve created.
            </p>
        </div>
        <div>
          <VerticalTimeline>
            {experiences.map((experience) =>(
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={<div className='flex justify-center items-center w-full h-full'>
                        <img
                          src={experience.icon}
                          alt={experience.company_name}
                          className="w-[90%] h-[90%] object-contain"
                        />
                      </div>
                      }
                      contentStyle={{
                        borderBottom: "8px",
                        borderStyle: "solid",
                        borderBottomColor: experience.iconBg,
                        boxShadow: "none",
                      }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p className="text-black font-medium font-base" style={{margin:0}}>
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point , index) => (
                    <li key={`experience-point-${index}`} className="text-black-500/50 font-normal pl-1 text-sm">
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />
      <CTA/>
    </section>
  )
}

export default About