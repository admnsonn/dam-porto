import { motion } from "motion/react";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const experiences = [
    {
        title: "UI/UX Designer",
        company: "PT. Inisiatif Newlife Kita",
        location: "Remote",
        period: "Juli 2025 – Now",
        description: "• Public Sector Digital Solutions: Led the UI/UX development for Kelola Cermat and Slada, specialized digital platforms designed to digitize and streamline administrative workflows for regional government agencies.\n• Smart Mobility Innovation: Designed the end-to-end user interface for Mobility, a public transportation app focused on optimizing urban travel and supporting government efforts to reduce private vehicle dependency.\n• Business Process Ideation: Analyzed and modeled complex organizational business processes, translating them into scalable digital product strategies and intuitive user flows that simplify bureaucratic tasks.\n• Data-Driven Design Validation: Managed rigorous Usability Testing sessions to identify and resolve user pain points, ensuring the final design is highly functional and user-friendly.\n• Conceptual Application Design (Granat): Transformed the core vision of Granat (Anti-Narcotics Movement Organization) into a comprehensive mobile application design, creating a modern visual identity that aligns with the organization's mission.\n• Cross-Functional Collaboration: Served as the primary liaison between business stakeholders and the development team, ensuring every design is technically feasible for frontend implementation while meeting business goals.",
    },

    {
        title: "Information Technology Staff",
        company: "PT. Teknologi Otonometer Nusantara",
        location: "Remote",
        period: "Feb 2024 – Juli 2025",
        description: "• UI/UX Research & Design: Conducted user research to inform product strategy and designed high-fidelity user interfaces that prioritize user-centric experiences and intuitive navigation.\n• Regulatory-Compliant UI Implementation: Translated complex requirements into responsive UI components, ensuring all designs adhere to regional government standards and accessibility guidelines.\n• Frontend Data Validation: Performed comprehensive testing to ensure seamless integration between the frontend and backend, maintaining high data accuracy across the platform.\n• Platform Enhancement (Otonometer): Developed and optimized key interactive modules for the Otonometer platform, including Utak-Atik, Berkaca, and Jelajah, focusing on data-driven visualization.\n• Organizational System Development: Architected the Regional Government Profile (Profil Pemda) website, a specialized tool designed to help civil servants (ASN) structure their organizational hierarchy and manage active positions through a streamlined interface.\n• Core Tech Stack Mastery: Built scalable and maintainable web applications using React.js and Tailwind CSS, implementing reusable components to streamline the development workflow.\n• System Expansion (Neraca Ruang): Enhanced the Neraca Ruang ecosystem by architecting an E-Book integration and a real-time notification system to improve user retention and engagement.",
    },

    {
        title: "Frontend Developer",
        company: "CV. Halte Industri",
        location: "Remote",
        period: "Oct 2023 – Feb 2024",
        description: "• UI/UX Design & Prototyping: Engineered high-fidelity prototypes using Figma, leveraging advanced features such as Auto Layout and Design Systems. Applied color theory and user research insights to bridge the gap between aesthetics and functional usability.\n• Responsive Frontend Development: Developed scalable web applications using Vue.js and Bootstrap, ensuring full responsiveness and strict compliance with regional government system requirements.\n• Version Control & Collaboration: Managed codebase integrity and collaborative workflows through GitHub, maintaining a streamlined version control process for continuous updates.\n• Admin Panel Optimization: Architected and optimized complex data management tables for village administrators using the PrimeVue UI library, significantly improving data organization and administrative efficiency.\n• Data Visualization: Implemented interactive data dashboards using Chart.js to visualize village metrics and measurement scales, providing clear and actionable insights for stakeholders.\n• API Integration & Testing: Conducted rigorous API validation using Postman and Hoppscotch to ensure seamless data communication between the frontend and backend services.",
    },

        {
        title: "Frontend UI Developer",
        company: "Cafeasy",
        location: "Hybrid",
        period: "Sep 2022 – Aug 2023",
        description: "• UX Research & Problem Solving: Conducted in-depth business process research focusing on the hospitality sector in Bandung. Successfully identified pain points in cafe management and designed a streamlined solution by integrating order systems with Google Sheets.\n• Design Thinking & Strategy: Applied the Design Thinking framework to drive product innovation, utilizing FigJam for user research to map out emotional and cognitive aspects (How, Does, Feel, and Thinking).\n• End-to-End Design Process: Orchestrated the full design lifecycle from Information Architecture and User Personas to User Flows. Developed low-fidelity wireframes and progressed to high-fidelity interactive prototypes, followed by rigorous Usability Testing.\n• Frontend Development & UI Testing: Built a high-performance web-based admin panel using React.js and Bootstrap. Leveraged the PrimeReact UI Library to architect efficient Data Views and complex Data Tables for administrative tasks.\n• API Integration & QA: Managed backend API integration and validation using Postman. Ensured platform reliability and UI consistency by conducting automated tests through Katalon Studio.\n• Agile Project Management: Executed projects under the Scrum methodology, actively participating in Sprint Planning, Backlog management, and Retrospectives using Trello to ensure timely delivery and iterative improvement.",
    },

            {
        title: "Practicum Assistant for Web Design and Programming",
        company: "Informatics Laboratory Telkom University",
        location: "Bandung",
        period: "Sep 2022 – Jan 2023",
        description: "• Technical Mentorship & Code Review: Conducted comprehensive code reviews for students, providing in-depth explanations of algorithms and logic while ensuring strict adherence to academic integrity and plagiarism policies.\n• Full-Stack Troubleshooting: Facilitated hands-on technical support in the IT Laboratory, assisting students in debugging complex website development issues, including JavaScript integration and backend logic.\n• Environment & Tooling: Utilized Visual Studio Code for rigorous code evaluations and verified implementations across PHP, HTML, and various CSS frameworks to ensure industry-standard coding practices.\n• Structured Technical Instruction: Orchestrated and delivered an 8-session curriculum covering fundamental and advanced web development topics, including CSS Styling, HTML Layout Frameworks, and Looping Algorithms.",
    },

                {
        title: "Practicum Assistant for Software Testing",
        company: "Informatics Laboratory Telkom University",
        location: "Bandung",
        period: "Sep 2022 – Jan 2023",
        description: "• Software Quality Assurance: Conducted comprehensive source code analysis to identify bottlenecks and ensure compliance with industry coding standards. Leveraged JMeter, Selenium, and Katalon to perform rigorous performance and functional testing.\n• UAT & Reliability Mentorship: Instructed students on advanced troubleshooting methodologies and guided the implementation of User Acceptance Testing (UAT). Utilized Jira for defect tracking and SonarQube for automated code quality and reliability assessments.\n• QA Automation Instruction: Facilitated hands-on training in QA Automation practices, empowering students to design and execute automated test scripts to ensure software stability and high-quality delivery.",
    },

                    {
        title: "UI/UX Designer",
        company: "Badan Amil Zakat Nasional (BAZNAS)",
        location: "Bandung",
        period: "Jun 2022 – Aug 2022",
        description: "• Design System Architecture: Developed a comprehensive Design System and styling guidelines, standardizing typography, color palettes, and UI patterns to ensure cross-platform consistency and streamline the handoff process between designers and developers.\n• Component-Driven Design: Engineered a library of reusable UI components including buttons, icons, and cards within Figma, focusing on scalability, interactivity, and alignment with established brand identity.\n• User-Centric Redesign: Led the redesign of landing pages by conducting two iterative rounds of Usability Testing with real users. Integrated UX Writing strategies to improve content clarity, reduce cognitive load, and drive user engagement.\n• Quality Assurance & Research Management: Performed rigorous manual website testing and synthesized findings into actionable User Research reports. Managed the end-to-end design finalization and task tracking using Trello.",
    },

                        {
        title: "Publication and Documentation",
        company: "Indosat Ooredoo (E-Wallet User Research Challenge)",
        location: "Hybrid",
        period: "Jun 2021 – Nov 2021",
        description: "• Creative Video Production: Produced and edited high-impact video content, including Motion Graphics, to document and promote the 'E-Wallet User Research Challenge' across various digital platforms.\n• Visual Documentation: Captured and curated comprehensive video documentation of all project milestones, ensuring a professional record of the research process and event execution.\n• Strategic Concept Development: Actively contributed to brainstorming sessions, providing concrete ideas and actionable strategies for the event's conceptualization and operational planning.\n• Narrative Storytelling: Transformed raw event footage and abstract ideas into compelling video narratives that effectively communicated the project's goals to stakeholders.",
    },
];

export function Experience() {
    return (
        <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2
                        style={{ fontFamily: "var(--font-display)" }}
                        className="text-5xl md:text-6xl lg:text-7xl mb-6 italic"
                    >
                        Experience
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        My professional journey and key roles in software development and design.
                    </p>
                </motion.div>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                                        <div className="flex items-center gap-2">
                                            <Briefcase className="w-4 h-4" />
                                            <span>{exp.company}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4" />
                                            <span>{exp.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4" />
                                            <span>{exp.period}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-muted-foreground leading-relaxed space-y-2">
                                {exp.description.split('\n').map((line, lineIndex) => (
                                    <p key={lineIndex}>{line}</p>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}