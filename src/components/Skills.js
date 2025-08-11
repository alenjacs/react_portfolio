// Skills.js — drop-in replacement (arrows removed, scrollbar kept)
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const skills = [
    "Python",
    "Java",
    "JavaScript",
    "React",
    "SQL",
    "Flutter/Dart",
    "Machine Learning",
    "R",
    "Unreal Engine",
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>CS & Data Science major focused on high-impact, data-driven software.</p>

              <div className="skills-scroller">
                <ul className="skills-row" role="list">
                  {skills.map((s) => (
                    <li key={s} className="skills-item">
                      <span className="skill-pill">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img className="background-image-left" src={colorSharp} alt="" aria-hidden="true" />
    </section>
  );
};
