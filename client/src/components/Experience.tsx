import { motion } from "framer-motion";
import { ArticulateStorylineIcon } from "./ui/tool-icons";

const Experience = () => {
  const experiences = [
    {
      period: "Nov 2024 - Present",
      title: "Senior Technical Instructional Designer II",
      company: "NIIT",
      location: "Gurgaon • Remote",
      type: "Full-time",
      skills: ["ADDIE Model", "Camtasia", "Articulate", "AI Tools", "+5 skills"],
      achievements: [
        "Managed multiple concurrent digital learning projects for enterprise stakeholders",
        "Conducted training needs analysis and collaborated with business stakeholders",
        "Developed multimedia learning assets and interactive training content",
        "Leveraged AI-enabled learning tools to enhance learner engagement",
        "Facilitated stakeholder review cycles and implemented continuous improvements"
      ]
    },
    {
      period: "Aug 2023 - Mar 2024",
      title: "Instructional Designer",
      company: "PeopleStrong Pvt. Ltd.",
      location: "Gurgaon • Onsite",
      type: "Full-time",
      skills: ["ADDIE", "Storyboarding", "Articulate Rise", "LMS", "Adult Learning"],
      achievements: [
        "Designed and developed scalable e-learning solutions aligned with enterprise objectives",
        "Created instructional storyboards, assessments, and learning assets",
        "Strengthened learning resources through feedback-driven enhancements",
        "Leveraged AI-enabled tools and multimedia technologies for content development"
      ]
    },
    {
      period: "Feb 2023 - Jul 2023",
      title: "Instructional Designer",
      company: "Prospecta Software",
      location: "Noida • Onsite",
      type: "Full-time",
      skills: ["SAM Model", "Storyboarding", "Design Documents", "ILT", "Assessments"],
      achievements: [
        "Partnered with stakeholders to conduct learning needs analyses",
        "Designed 50+ custom storyboards and assessments for business process learning",
        "Created 100+ design documents and learning aids for software users",
        "Improved learner self-sufficiency across user groups"
      ]
    },
    {
      period: "Mar 2022 - Jul 2022",
      title: "Sr. Instructional Designer",
      company: "Asian Academy of Film & Television",
      location: "Noida • Onsite",
      type: "Full-time",
      skills: ["ADDIE", "Bloom's Taxonomy", "Team Leadership", "LMS Platforms"],
      achievements: [
        "Applied ADDIE methodology to lead multiple instructional design projects",
        "Coordinated with SMEs to validate content accuracy and alignment",
        "Authored 40+ design documents, storyboards, and assessments",
        "Led and mentored a team of instructional designers overseeing quality assurance"
      ]
    },
    {
      period: "Jan 2020 - Mar 2020",
      title: "Sr. Instructional Designer/Curriculum Designer",
      company: "LIDO Learning",
      location: "Mumbai • Onsite",
      type: "Full-time",
      skills: ["Curriculum Design", "ILT", "VILT", "LMS Management", "Content Governance"],
      achievements: [
        "Designed and implemented learner-centric ILT and digital learning programs",
        "Created interactive activities, storyboards, and assessments",
        "Led and mentored a team of instructional designers",
        "Managed project planning, content governance, and quality assurance"
      ]
    },
    {
      period: "Jul 2019 - Nov 2019",
      title: "Content Developer",
      company: "Doubtnut",
      location: "Gurgaon • Onsite",
      type: "Full-time",
      skills: ["Content Development", "Quality Assurance", "Higher Learning", "Digital Assets"],
      achievements: [
        "Developed and reviewed 150+ digital learning assets",
        "Ensured content accuracy, instructional clarity, and quality standards",
        "Supported higher-learning audiences with comprehensive content",
        "Maintained rigorous quality control throughout content development lifecycle"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gradient mb-4">My Experience</h2>
          <p className="text-xl text-gray-400">Professional journey and key achievements</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#ff6b35] to-[#ff8f50] z-0"></div>

          <div className="relative z-20 space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                <motion.div
                  initial={{ opacity: 0, y: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`flex-1 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'} mb-8 lg:mb-0 relative z-30`}
                >
                  <div className="glass-effect p-6 rounded-2xl hover:primary-glow transition-all duration-300 relative z-30 bg-gray-800/90 backdrop-blur-sm">
                    <div className="flex items-center mb-4">
                      <div className={`w-4 h-4 ${index === 0 ? 'bg-[#ff6b35]' : index === 1 ? 'bg-[#ff8f50]' : 'bg-[#ff6b35]'} rounded-full mr-3`}></div>
                      <span className="text-sm text-gray-400">{exp.period}</span>
                      <span className="text-xs text-gray-500 ml-2">• {exp.type}</span>
                    </div>
                    <h3 className={`text-2xl font-semibold ${index === 0 ? 'text-[#ff6b35]' : index === 1 ? 'text-[#ff8f50]' : 'text-[#ff6b35]'} mb-2`}>
                      {exp.title}
                    </h3>
                    <p className="text-lg text-white font-medium mb-2">{exp.company}</p>
                    <p className="text-sm text-gray-300 mb-4">{exp.location}</p>
                    <div className="mb-4">
                      <span className="text-sm text-gray-200 font-medium">Skills: </span>
                      <span className="text-sm text-[#ff8f50] font-medium">{exp.skills.join(", ")}</span>
                    </div>
                    <ul className="space-y-2 text-gray-300">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>• {achievement}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className={`flex-1 ${index % 2 === 0 ? 'lg:pl-8' : 'lg:pr-8'} relative z-30`}
                >
                  <div className="w-48 h-48 bg-white rounded-lg flex items-center justify-center mx-auto p-3 shadow-lg">
                    <img
                      src={
                        index === 0 ? "/images/NIIT.png" :
                          index === 1 ? "/images/peoplestrong.jpg" :
                            index === 2 ? "/images/prospecta_software_logo.jpg" :
                              index === 3 ? "/images/Asian Academy of Film & Television.jpg" :
                                index === 4 ? "/images/LIDO Learning.png" :
                                  "/images/Doubtnut.jpg"
                      }
                      alt={`${exp.company} Logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
