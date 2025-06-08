import { motion } from 'framer-motion';

const libraries = [
  {
    id: 1,
    title: "CSS3 Spin Preloader",
    description: "A modern loading animation created with pure CSS3, featuring smooth transitions and customizable colors.",
    demoUrl: "http://codepen.io/rickzanutta/pen/yjaeB",
    tags: ["CSS3", "Animation", "Preloader"]
  },
  {
    id: 2,
    title: "Search Input Animation",
    description: "An animated search input field with context-aware transitions and smooth effects.",
    demoUrl: "http://codepen.io/rickzanutta/pen/NNzGVd",
    tags: ["CSS", "JavaScript", "Animation"]
  },
  {
    id: 3,
    title: "Menu Animation",
    description: "Smooth open & close menu animation with modern transitions and responsive design.",
    demoUrl: "http://codepen.io/rickzanutta/pen/aOQddB",
    tags: ["React", "Animation", "UI/UX"]
  },
  {
    id: 4,
    title: "BRick Boilerplate",
    description: "A lightweight and customizable boilerplate for modern web development.",
    demoUrl: "https://github.com/Riccardo-Zanutta/brick",
    tags: ["Boilerplate", "Development", "Workflow"]
  }
];

const Libraries = () => {
  return (
    <section id="libraries" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Libraries & Experiments
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A collection of reusable components, animations, and experiments showcasing
            creative solutions and modern web development techniques.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {libraries.map((lib, index) => (
            <motion.div
              key={lib.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-bold text-primary mb-3">
                  {lib.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  {lib.description}
                </p>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {lib.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={lib.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary-dark transition-colors duration-300"
                  >
                    <span>View Demo</span>
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://codepen.io/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View More on CodePen
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Libraries;
