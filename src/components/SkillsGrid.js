import { motion } from 'framer-motion';
import SkillsGlobe from './SkillsGlobe'; // Import SkillsGlobe

const SkillsGrid = ({ skills = [
  'React', 'JavaScript', 'TypeScript', 
  'Node.js','Python'
] }) => {
  return (
    <SkillsGlobe skills={skills} />
  );
};

export default SkillsGrid; 