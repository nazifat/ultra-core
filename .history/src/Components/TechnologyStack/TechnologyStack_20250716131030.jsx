import React from 'react';
import { FaCheck } from 'react-icons/fa';

const techStack = [
  {
    category: 'Frontend',
    tools: ['React', 'Angular', 'Vue'],
  },
  {
    category: 'Backend',
    tools: ['Node.js', 'Python', 'Java', '.NET'],
  },
  {
    category: 'Mobile',
    tools: ['Flutter', 'React Native', 'Swift', 'Kotlin'],
  },
  {
    category: 'Cloud',
    tools: ['AWS', 'Azure', 'GCP'],
  },
  {
    category: 'DevOps',
    tools: ['Docker', 'Kubernetes', 'Jenkins'],
  },
  {
    category: 'Data & AI',
    tools: ['TensorFlow', 'PyTorch', 'Pandas', 'BigQuery'],
  },
  {
    category: 'Design',
    tools: ['Figma', 'Adobe XD'],
  },
];

const TechnologyStack = () => {
  return (
    <div className="w-full py-16 px-4 md:px-10 bg-white">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {techStack.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm p-5 hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-700 to-pink-500 text-transparent bg-clip-text mb-4">
              {item.category}
            </h3>

            <ul className="space-y-2">
              {item.tools.map((tool, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-700">
                  <FaCheck className="text-purple-400 mt-1" />
                  <span>{tool}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyStack;
