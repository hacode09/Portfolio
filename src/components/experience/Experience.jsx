import React, { useState } from "react";
import "./experience.css";
import skillIcon from "../../assests/skill.png";

const experienceItems = [
    {
        company: "Blackhawk Networks",
        role: "Software Engineer",
        location: "Bangalore, india  / Hybrid",
        duration: "June 2025 - May 2026",
        skills: ["React.js", "TypeScript","JavaScript", "Java", "Spring Boot", "GraphQL", "REST APIs", "Tailwind CSS", "MongoDB", "Postman", "Jenkins", "AWS", "Claude AI", "SonarQube", "Git/GitHub", "Agile / Scrum", "Microservices", "CI/CD",  "Performance Optimization", "Production Debugging", "Production Deployment", "Unit Testing"],
        details: [
            "Improved system stability of the Raptor application by diagnosing and resolving critical bugs in error handling, API failures, and data inconsistencies across React.js and Java Spring Boot, reducing production incidents by ~35%.",

            "Engineered end-to-end features using Bloom GraphQL in collaboration with Java Spring Boot backend services, optimizing query performance and maintaining" + 
            " consistent API contracts across service boundaries.",

            "Delivered 15+ UI enhancements in React and T ypeScript including card image rendering, delivery insights module, transaction criteria filters, and dynamic date-range"
            + " views, improving platform usability adopted by the entire user base.",

            "Integrated Raptor with 4+ upstream and downstream services in a high-volume enterprise payments ecosystem, ensuring fault-tolerant and consistent data exchange across complex microservice boundaries.",

            "Maintained 90%+ code quality standards by actively contributing to CI/CD pipelines, conducting code reviews, and performing production debugging using Jenkins, SonarQube, Git/GitHub, and Postman."


        ],
    },
    {
        company: "Infiniti Research Ltd",
        role: "Junior Software Engineer",
        location: "Bangalore, india / On-site",
        duration: "Jan 2025 - March 2025",
        skills: ["Vue.js","React", "JavaScript", "TypeScript", "BootStrap", "REST APIs", "Responsive UI", "Postman", "Jenkins", "AWS", "SonarQube", "Git/GitHub", "Microservices", "CI/CD",  "Performance Optimization", "Production Debugging", "Production Deployment", "Unit Testing"],
        details: [
            "Contributed to BizVibe, a leading B2B networking platform serving global supplier discovery, by developed and optimized frontend modules and delivered multiple UI page features that were successfully deployed to production.",
            "Built 10+ responsive UI components improving platform usability and user engagement across core BizVibe features.",
            "Integrated and optimized REST APIs in collaboration with backend teams, ensuring seamless real-time data synchronization on the frontend.",
            "Participated in Agile sprints, code reviews, and cross-functional team collaboration to deliver high-quality features within tight deadlines."
        ],
    },
    {
        company: "Refactor Academy",
        role: "Associate Software Engineer",
        location: "Bangalore, india / On-site",
        duration: "Jan 2024 - Dec 2024",
        skills: ["React", "Redux","TypeScript", "JavaScript", "BootStrap", "Node.js", "Nest.js", "Express", "MongoDB", "Rest APIs","MySQL", "Postman", "Jenkins", "AWS", "SonarQube", "Git/GitHub", "Microservices", "CI/CD",  "Performance Optimization", "Production Debugging", "Production Deployment", "Unit Testing"],
        details: [
            "Designed and developed the candidate report UI for Skill IQ (B2B AI Saas Product) , a production-grade assessment platform, using React and Redux improving report load performance and user readability.",
            "Built scalable server-side modules using Node.js and Nest.js following microservices architecture, improving backend modularity and system scalability.",
            "Designed and optimized MongoDB and MySQL schemas, improving data retrieval efficiency by -25% for high-frequency queries.",
            "Integrated 10+ RESTful APIs enabling seamless frontend-backend communication, reducing data fetch latency and improving overall user experience.",
            "Managed codebase using Git and GitHub, enabling structured version control and smooth collaboration across a team of 5+ developers."
        ],
    },
];

const Experience = () => {
    const [tooltipPlacement, setTooltipPlacement] = useState({ index: null, placement: "bottom" });
    const [openSkillsIndex, setOpenSkillsIndex] = useState(null);

    const handleTooltipOpen = (index, event) => {
        const buttonRect = event.currentTarget.getBoundingClientRect();
        const tooltipEl = event.currentTarget.nextElementSibling;
        if (!tooltipEl) {
            setTooltipPlacement({ index, placement: "bottom" });
            return;
        }

        const tooltipHeight = tooltipEl.offsetHeight || 180;
        const spaceBelow = window.innerHeight - buttonRect.bottom;
        const spaceAbove = buttonRect.top;
        const placement = spaceBelow < tooltipHeight + 16 && spaceAbove > spaceBelow ? "top" : "bottom";

        setTooltipPlacement({ index, placement });
    };

    const handleTooltipClose = () => {
        setTooltipPlacement({ index: null, placement: "bottom" });
    };

    const toggleSkills = (index, event) => {
        if (window.matchMedia("(hover: hover)").matches) return;
        setOpenSkillsIndex((prev) => (prev === index ? null : index));
        handleTooltipOpen(index, event);
    };

    return (
        <section className="section experience" id="experience">
            <h2 className="section__title">Experience</h2>
            <span className="section__subtitle">Professional timeline</span>

            <div className="experience__container container">
                {experienceItems.map((item, index) => (
                    <article className="experience__entry" key={index}>
                        <div className="experience__header">
                            <div className="experience__company-wrap">
                                <h3 className="experience__company">{item.company}</h3>
                                {item.skills && item.skills.length > 0 && (
                                    <div className="experience__skills">
                                        <button
                                            type="button"
                                            className="experience__skills-trigger"
                                            aria-label={`Show skills for ${item.company}`}
                                            aria-expanded={openSkillsIndex === index}
                                            onMouseEnter={(event) => handleTooltipOpen(index, event)}
                                            onFocus={(event) => handleTooltipOpen(index, event)}
                                            onMouseLeave={handleTooltipClose}
                                            onBlur={handleTooltipClose}
                                            onClick={(event) => toggleSkills(index, event)}
                                        >
                                            <img src={skillIcon} alt="skills" className="experience__skills-icon" />
                                        </button>
                                        <div
                                            className={`experience__skills-tooltip ${
                                                tooltipPlacement.index === index || openSkillsIndex === index
                                                    ? `experience__skills-tooltip--${tooltipPlacement.placement} experience__skills-tooltip--visible`
                                                    : ""
                                            }`}
                                            role="tooltip"
                                        >
                                            {item.skills.map((s, i) => (
                                                <span className="experience__skill" key={i}>{s}</span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="experience__meta">
                                <span className="experience__location">{item.location}</span>
                                <span className="experience__duration">{item.duration}</span>
                            </div>
                        </div>
                        <p className="experience__position">{item.role}</p>
                        <div className="experience__list">
                            {item.details.map((detail, detailIndex) => (
                                <div className="experience__item" key={detailIndex}>
                                    <i className="uil uil-check-circle experience__icon"></i>
                                    <p>{detail}</p>
                                </div>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Experience;
