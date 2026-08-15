import { motion } from "framer-motion";
import { Presentation, Smartphone } from "lucide-react";
import { 
  CamtasiaIcon, 
  SynthesiaIcon, 
  AdobeCaptivateIcon,
  ArticulateStorylineIcon, 
  CanvaIcon,
  Microsoft365Icon,
  VyondIcon,
  PowerPointIcon
} from "@/components/ui/tool-icons";
import {
  HTMLIcon,
  CSSIcon,
  JavaScriptIcon,
  PythonIcon,
  SQLIcon,
  AWSIcon
} from "@/components/ui/tech-icons";
import {
  ChatGPTIcon,
  ClaudeIcon,
  GeminiIcon,
  CopilotIcon,
  MidJourneyIcon,
  CursorIcon,
  N8NIcon,
  ClaudeCodeIcon,
  HeyGenIcon,
  GoogleFlowIcon,
  GoogleStitchIcon
} from "@/components/ui/ai-tool-icons";

const About = () => {
  const tools = [
    { icon: CamtasiaIcon, name: "Camtasia", color: "text-[#ff6b35]" },
    { icon: SynthesiaIcon, name: "Synthesia", color: "text-[#ffb84d]" },
    { icon: AdobeCaptivateIcon, name: "Adobe Captivate", color: "text-[#ff6b35]" },
    { icon: ArticulateStorylineIcon, name: "Articulate Storyline", color: "text-[#ffb84d]" },
    { icon: ArticulateStorylineIcon, name: "Articulate Rise", color: "text-[#ff6b35]" },
    { icon: CanvaIcon, name: "Canva", color: "text-[#ffb84d]" },
    { icon: Microsoft365Icon, name: "Microsoft 365", color: "text-[#ffb84d]" },
    { icon: VyondIcon, name: "Vyond", color: "text-[#ff6b35]" },
    { icon: PowerPointIcon, name: "PowerPoint", color: "text-[#ffb84d]" },
    { icon: CanvaIcon, name: "Generative AI", color: "text-[#ff6b35]" },
  ];

  const technologies = [
    { icon: HTMLIcon, name: "HTML 5", color: "text-[#ff6b35]" },
    { icon: CSSIcon, name: "CSS", color: "text-[#ffb84d]" },
    { icon: JavaScriptIcon, name: "JavaScript", color: "text-[#ff6b35]" },
    { icon: SQLIcon, name: "SQL", color: "text-[#ffb84d]" },
    { icon: AWSIcon, name: "AWS", color: "text-[#ff6b35]" },
    { icon: PythonIcon, name: "ADDIE Model", color: "text-[#ffb84d]" },
  ];

  const aiTools = [
    { icon: ChatGPTIcon, name: "ChatGPT", color: "text-[#ff6b35]" },
    { icon: ClaudeIcon, name: "Claude AI", color: "text-[#ffb84d]" },
    { icon: GeminiIcon, name: "Gemini", color: "text-[#ff6b35]" },
    { icon: CopilotIcon, name: "Microsoft Copilot", color: "text-[#ffb84d]" },
    { icon: MidJourneyIcon, name: "MidJourney", color: "text-[#ff6b35]" },
    { icon: CursorIcon, name: "Cursor", color: "text-[#ffb84d]" },
    { icon: N8NIcon, name: "n8n", color: "text-[#ff6b35]" },
    { icon: ClaudeCodeIcon, name: "Claude Code", color: "text-[#ffb84d]" },
    { icon: HeyGenIcon, name: "HeyGen", color: "text-[#ff6b35]" },
    { icon: GoogleFlowIcon, name: "Google Flow", color: "text-[#ffb84d]" },
    { icon: GoogleStitchIcon, name: "Google Stitch", color: "text-[#ff6b35]" },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gradient mb-4">About Me</h2>
          <p className="text-xl text-gray-400">Get to know more about my journey and expertise</p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24"
          >
            <img
              src="/images/about%20me%20image.png"
              alt="Prashika Lalwani - Instructional Designer Consultant"
              className="rounded-2xl shadow-2xl w-full object-cover lg:min-h-[500px]"
              loading="eager"
              decoding="async"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              Results-driven <b>Instructional Designer Consultant</b> with 6+ years of experience designing engaging learning solutions for technical and corporate audiences. I leverage industry-leading tools like <b>Articulate Storyline 360, Adobe Captivate, Camtasia, Synthesia,</b> and <b>Canva</b> alongside <b>Generative AI tools</b> to build interactive learning experiences that transform complex concepts and deliver measurable outcomes.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              From <b>instructional design</b> and <b>storyboarding</b> to <b>curriculum development</b> and <b>LMS implementation</b>, I bring expertise in <b>ADDIE methodology</b> and adult learning principles to every project. Passionate about harnessing AI and innovative technologies to make learning more accessible, engaging, and effective for diverse audiences globally.
            </p>
            
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-[#ff6b35] mb-6">Tools:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="glass-effect p-4 rounded-lg text-center hover:primary-glow transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex justify-center mb-2">
                      <tool.icon className={`${tool.color} mx-auto`} size={32} />
                    </div>
                    <p className="text-sm text-white">{tool.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-[#ff6b35] mb-6">Technologies:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="glass-effect p-4 rounded-lg text-center hover:primary-glow transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex justify-center mb-2">
                      <tech.icon className={`${tech.color} mx-auto`} size={32} />
                    </div>
                    <p className="text-sm text-white">{tech.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-[#ff6b35] mb-6">AI Tools:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {aiTools.map((ai, index) => (
                  <motion.div
                    key={ai.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="glass-effect p-4 rounded-lg text-center hover:primary-glow transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex justify-center mb-2">
                      <ai.icon className={`${ai.color} mx-auto`} size={32} />
                    </div>
                    <p className="text-sm text-white">{ai.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
