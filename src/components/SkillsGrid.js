import { motion } from 'framer-motion';

const SkillsGrid = ({ skills = [
  'React', 'JavaScript', 'TypeScript', 
  'Node.js','Python'
] }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {skills.map((skill, index) => (
        <motion.div
          key={skill}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.05, backgroundColor: 'var(--primary)' }}
          className="bg-gray-800 p-4 rounded-lg text-center shadow-lg"
        >
          <p className="text-lg font-medium">{skill}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsGrid; 