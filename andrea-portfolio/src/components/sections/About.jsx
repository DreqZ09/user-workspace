import { motion } from 'framer-motion';

const skills = [
  {
    category: "Frontend",
    items: ["React.js", "Vite", "JavaScript (ES6+)", "Tailwind CSS", "HTML5/CSS3"]
  },
  {
    category: "Tools & Methods",
    items: ["Git", "Responsive Design", "RESTful APIs", "npm/yarn", "VS Code"]
  },
  {
    category: "Soft Skills",
    items: ["Problem Solving", "Team Collaboration", "Quick Learning", "Communication", "Time Management"]
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8">
            About Me
          </h2>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-primary mb-4">
                Junior Frontend Developer
              </h3>
              <p className="text-gray-600 mb-6">
                As a passionate junior frontend developer, I specialize in creating modern and responsive web applications 
                using React, Vite, and Tailwind CSS. My journey in web development started with a strong desire to build 
                user-friendly interfaces that not only look great but also provide excellent user experiences.
              </p>
              <p className="text-gray-600 mb-8">
                I'm constantly learning and staying up-to-date with the latest web technologies and best practices. 
                My approach to development focuses on writing clean, maintainable code while ensuring optimal performance 
                and accessibility.
              </p>

              {/* Skills Section */}
              <div className="space-y-8">
                <h3 className="text-xl font-bold text-primary">Skills & Expertise</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {skills.map((skillGroup, index) => (
                    <motion.div
                      key={skillGroup.category}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      className="space-y-4"
                    >
                      <h4 className="text-lg font-semibold text-primary">
                        {skillGroup.category}
                      </h4>
                      <ul className="space-y-2">
                        {skillGroup.items.map((skill) => (
                          <li
                            key={skill}
                            className="flex items-center text-gray-600"
                          >
                            <svg
                              className="w-4 h-4 mr-2 text-green-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Education & Goals */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-12"
              >
                <h3 className="text-xl font-bold text-primary mb-4">
                  Current Focus
                </h3>
                <p className="text-gray-600">
                  I'm currently focused on expanding my knowledge in modern frontend development, 
                  particularly in areas like state management, performance optimization, and advanced React patterns. 
                  I'm always open to new opportunities and collaborations that can help me grow as a developer.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
