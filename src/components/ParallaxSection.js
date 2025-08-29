import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxSection = ({ 
  children, 
  backgroundImage = '/images/image_1.jpg',
  speed = 0.5,
  className = '',
  overlayColor = 'rgba(0, 0, 0, 0.7)',
  height = '100vh'
}) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Transform values for parallax effect
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * -50}%`]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden ${className}`}
      style={{ height }}
    >
      {/* Background with parallax effect */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'radial-gradient(circle at 20% 10%, rgba(37,99,235,0.25), transparent 60%), radial-gradient(circle at 80% 0%, rgba(168,85,247,0.18), transparent 60%), radial-gradient(circle at 50% -10%, rgba(59,130,246,0.18), transparent 60%)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y: backgroundY
        }}
      />

      {/* Overlay */}
      <div 
        className="absolute inset-0 w-full h-full" 
        style={{ backgroundColor: overlayColor }}
      />

      {/* Content with counter-parallax effect */}
      <motion.div 
        className="relative z-10 flex items-center justify-center w-full h-full"
        style={{ 
          y: contentY,
          opacity,
          scale
        }}
      >
        <div className="container mx-auto px-4">
          {children}
        </div>
      </motion.div>
    </section>
  );
};

export default ParallaxSection; 