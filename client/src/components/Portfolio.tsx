import { motion } from "framer-motion";
import { ExternalLink, Github, Eye, Info, MousePointer } from "lucide-react";
import { useState } from "react";

const Portfolio = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // Enhanced function to handle project card clicks - simplified and more robust
  const handleProjectClick = (project: any) => {
    console.log('Project clicked:', project.title);
    
    if (project.fileUrl && project.fileUrl !== "") {
      // Open PDFs inline in a new tab so they preview in the browser
      window.open(encodeURI(project.fileUrl), '_blank', 'noopener,noreferrer');
    } else {
      alert(`🎯 Project: ${project.title}\n\n📅 Year: ${project.year}\n🏷️ Category: ${project.category}\n\n✅ Click functionality is working!\n💡 Add your file links to the fileUrl field to open actual project files.`);
    }
  };

  const projects = [
    {
      title: "JPMorgan Chase - Phishing & Cyber Defense",
      description: "Designed an interactive enterprise cybersecurity awareness module focused on identifying sophisticated credential harvesting, out-of-band verification, and defending personal and account information against phishing attacks.",
      image: "/images/thumb_jpmc.jpg",
      tags: ["Cybersecurity", "E-Learning", "JPMorgan Chase", "Phishing Defense"],
      hoverClass: "hover:primary-glow",
      projectUrl: "#",
      githubUrl: "#",
      fileUrl: "/documents/Sample work JPMC- personal and phishing attacks.pdf",
      category: "Enterprise Security",
      year: "2024",
      tools: ["Instructional Design", "Articulate Storyline", "Cyber Defense"],
      isClickable: true
    },
    {
      title: "Blended Learning Programs Development",
      description: "Developed comprehensive blended learning programs combining e-learning modules, Instructor-Led Training (ILT), Virtual Instructor-Led Training (vILT), simulations, and video-based training. Collaborated with SMEs and stakeholders to support digital learning transformation initiatives.",
      image: "/images/Aicerts.png",
      tags: ["Blended Learning", "VILT", "Video Production"],
      hoverClass: "hover:orange-glow",
      projectUrl: "#",
      githubUrl: "#",
      fileUrl: "",
      category: "Training Programs",
      year: "2023-2024",
      tools: ["Camtasia", "Synthesia", "Canva", "Adobe Captivate"],
      isClickable: true
    },
    {
      title: "Custom Storyboards & Design Documents - Prospecta Software",
      description: "Created 50+ custom storyboards, assessments, and demo outlines for business process learning. Authored 100+ comprehensive design documents and learning aids to support software users and improve learner self-sufficiency across diverse user groups.",
      image: "/images/time.png",
      tags: ["Storyboarding", "Design Documents", "Business Training"],
      hoverClass: "hover:primary-glow",
      projectUrl: "#",
      githubUrl: "#",
      fileUrl: "",
      category: "Instructional Design",
      year: "2023",
      tools: ["Storyboarding", "Design Documentation", "Learning Aids"],
      isClickable: true
    },
    {
      title: "Storyboard Sample - Zomato",
      description: "Authored an interactive delivery partner onboarding and mobile literacy storyboard for Zomato. Covers smartphone fundamentals, GPS navigation, order workflows, and real-time app operations for field readiness.",
      image: "/images/zomato-cover.png",
      tags: ["Storyboarding", "Zomato", "Instructional Design", "Mobile Literacy"],
      hoverClass: "hover:orange-glow",
      projectUrl: "#",
      githubUrl: "#",
      fileUrl: "/documents/Storyboard Sample- Zomato.pdf",
      category: "Instructional Storyboard",
      year: "2023",
      tools: ["Storyboarding", "ADDIE Model", "Instructional Design"],
      isClickable: true
    },
    {
      title: "Manager Conversation Storyboard",
      description: "A comprehensive instructional storyboard designed for manager training and productive conversations. Focuses on leadership development and communication strategies.",
      image: "/images/thumb_storyboard.jpg",
      tags: ["Storyboarding", "Leadership Training", "Instructional Design"],
      hoverClass: "hover:primary-glow",
      projectUrl: "#",
      githubUrl: "#",
      fileUrl: "/documents/Manager Conversation Storyboard 1-1.pptx",
      category: "Storyboarding",
      year: "2024",
      tools: ["PowerPoint", "Storyboarding", "Leadership"],
      isClickable: true
    },
    {
      title: "U.S. Data Center Infrastructure",
      description: "An advanced presentation detailing modern technologies and management in U.S. Data Center Infrastructure. High-level technical overview for engineering audiences.",
      image: "/images/thumb_datacenter.jpg",
      tags: ["Technical Writing", "Infrastructure", "Presentation Design"],
      hoverClass: "hover:orange-glow",
      projectUrl: "#",
      githubUrl: "#",
      fileUrl: "/documents/Welcome to U.S. Data Center Infrastructure.pptx",
      category: "Technical Presentation",
      year: "2024",
      tools: ["PowerPoint", "Technical Writing", "Infrastructure"],
      isClickable: true
    },
    {
      title: "Why Ethical AI Matters",
      description: "A thought-provoking presentation on the importance of Ethical AI in today's world. Explores the balance between technological advancement and ethical responsibility.",
      image: "/images/thumb_ethical_ai.jpg",
      tags: ["AI Ethics", "Technology", "Presentation Design"],
      hoverClass: "hover:primary-glow",
      projectUrl: "#",
      githubUrl: "#",
      fileUrl: "/documents/Why Ethical AI Matters in Today's World.pptx.pptx",
      category: "Ethics & Technology",
      year: "2024",
      tools: ["PowerPoint", "AI Ethics", "Research"],
      isClickable: true
    }
  ];

  return (
    <section id="portfolio" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gradient mb-4">My Portfolio</h2>
          <p className="text-xl text-gray-400">Showcasing my best work and projects</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative h-full"
            >
              {/* Main clickable card wrapper - explicitly clickable with pointer-events-auto */}
              <div 
                onClick={() => handleProjectClick(project)}
                className={`glass-effect rounded-2xl overflow-hidden ${project.hoverClass} 
                  transition-all duration-300 cursor-pointer group relative transform-gpu pointer-events-auto flex flex-col h-full`}
                style={{ zIndex: 1, position: 'relative' }}
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 3,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.98 }}
                  onHoverStart={() => setHoveredProject(index)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="flex flex-col h-full"
                >
                  {/* Enhanced click indicator overlay */}
                  <div className="absolute top-4 right-4 z-30">
                    <motion.div 
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: hoveredProject === index ? 1 : 0,
                        opacity: hoveredProject === index ? 1 : 0,
                        transition: { duration: 0.2 }
                      }}
                      className="bg-[#ff6b35] text-white rounded-full p-2 flex items-center space-x-1 shadow-lg"
                    >
                      <MousePointer className="h-3 w-3" />
                      <span className="text-xs font-semibold">Click</span>
                    </motion.div>
                  </div>
                  
                  {/* Enhanced animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35]/10 via-transparent to-[#ff8f50]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Glow effect border */}
                  <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#ff6b35]/50 transition-all duration-300`} />
                  
                  <div className="relative overflow-hidden">
                    <motion.img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                      style={{ pointerEvents: 'none' }} // Prevent image from intercepting clicks
                      whileHover={{ 
                        filter: "brightness(1.2) saturate(1.1)",
                        transition: { duration: 0.3 }
                      }}
                    />
                    
                    {/* Enhanced overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Project category badge */}
                    <motion.div 
                      className="absolute top-4 left-4"
                      whileHover={{ scale: 1.05 }}
                      style={{ pointerEvents: 'none' }} // Ensure badge doesn't block clicks
                    >
                      <span className="px-3 py-1 bg-black/90 text-white text-xs rounded-full backdrop-blur-sm border border-white/20">
                        {project.category} • {project.year}
                      </span>
                    </motion.div>
                  </div>
                  
                  <div className="p-6 relative z-10 flex flex-col flex-1">
                    <motion.h3 
                      className="text-xl font-semibold text-white mb-2 group-hover:text-[#ff6b35] transition-colors duration-300 flex items-start min-h-[3.5rem]"
                      whileHover={{ x: 5 }}
                      style={{ pointerEvents: 'none' }}
                    >
                      {project.title}
                      <motion.div
                        className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        animate={{ rotate: hoveredProject === index ? 360 : 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Eye className="h-4 w-4 text-[#ff6b35]" />
                      </motion.div>
                    </motion.h3>
                    
                    <motion.p 
                      className="text-gray-300 mb-4 group-hover:text-gray-100 transition-colors duration-300"
                      whileHover={{ scale: 1.02, originX: 0 }}
                      style={{ pointerEvents: 'none' }} // Ensure text doesn't block clicks
                    >
                      {project.description}
                    </motion.p>

                    {/* Enhanced click to view indicator */}
                    <motion.div 
                      className="mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ 
                        y: hoveredProject === index ? 0 : 10,
                        opacity: hoveredProject === index ? 1 : 0,
                        transition: { duration: 0.3 }
                      }}
                      style={{ pointerEvents: 'none' }} // Ensure indicator doesn't block clicks
                    >
                      <div className="flex items-center text-sm font-medium text-[#ff6b35] bg-[#ff6b35]/10 rounded-lg px-3 py-2 border border-[#ff6b35]/20">
                        <MousePointer className="mr-2 h-4 w-4" />
                        <span>Click anywhere to view project</span>
                      </div>
                    </motion.div>
                    
                    {/* Tools used section */}
                    <motion.div 
                      className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: hoveredProject === index ? "auto" : 0,
                        opacity: hoveredProject === index ? 1 : 0,
                      }}
                      style={{ pointerEvents: 'none' }} // Ensure tools section doesn't block clicks
                    >
                      <p className="text-xs text-gray-400 mb-2">Tools Used:</p>
                      <div className="flex flex-wrap gap-1 max-w-full">
                        {project.tools.map((tool, toolIndex) => (
                          <span 
                            key={toolIndex}
                            className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                    
                    <div className="flex flex-wrap gap-2 mt-auto pt-2" style={{ pointerEvents: 'none' }}>
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span 
                          key={tagIndex}
                          whileHover={{ 
                            scale: 1.1,
                            rotate: 2,
                            transition: { duration: 0.2 }
                          }}
                          className={`px-3 py-1 text-black text-sm rounded-full font-medium transition-all duration-300 ${
                            tagIndex % 2 === 0 
                              ? 'bg-[#ff4e4e] hover:bg-[#ff6b35]/80 hover:shadow-lg hover:shadow-[#ff6b35]/50' 
                              : 'bg-[#fac4a2] hover:bg-[#ff8f50]/80 hover:shadow-lg hover:shadow-[#ff8f50]/50'
                          }`}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
