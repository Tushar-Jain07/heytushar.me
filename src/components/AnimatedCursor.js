import { useEffect, useState } from 'react';

const AnimatedCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleLinkHoverEvents = () => {
      const allLinks = document.querySelectorAll('a, button, .card, .theme-toggle, .scroll-to-top');
      
      allLinks.forEach(link => {
        link.addEventListener('mouseenter', () => setLinkHovered(true));
        link.addEventListener('mouseleave', () => setLinkHovered(false));
      });
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    // Set up link hover events after a slight delay to ensure DOM is ready
    setTimeout(handleLinkHoverEvents, 1000);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  const cursorOuterStyle = {
    position: 'fixed',
    width: clicked ? '25px' : linkHovered ? '40px' : '30px',
    height: clicked ? '25px' : linkHovered ? '40px' : '30px',
    borderRadius: '50%',
    border: `2px solid var(--primary)`,
    pointerEvents: 'none',
    zIndex: 9999,
    transition: 'width 0.2s, height 0.2s, transform 0.1s',
    transform: `translate(${position.x - (clicked ? 12.5 : linkHovered ? 20 : 15)}px, ${position.y - (clicked ? 12.5 : linkHovered ? 20 : 15)}px)`,
    opacity: hidden ? 0 : 0.7,
    mixBlendMode: 'difference',
  };

  const cursorInnerStyle = {
    position: 'fixed',
    width: clicked ? '10px' : '8px',
    height: clicked ? '10px' : '8px',
    borderRadius: '50%',
    backgroundColor: 'var(--primary)',
    pointerEvents: 'none',
    zIndex: 9999,
    transition: 'width 0.2s, height 0.2s, transform 0.05s',
    transform: `translate(${position.x - (clicked ? 5 : 4)}px, ${position.y - (clicked ? 5 : 4)}px)`,
    opacity: hidden ? 0 : 1,
  };

  return (
    <>
      <style jsx global>{`
        body {
          cursor: none;
        }
        a, button, .card, .theme-toggle, .scroll-to-top {
          cursor: none;
        }
      `}</style>
      <div style={cursorOuterStyle} />
      <div style={cursorInnerStyle} />
    </>
  );
};

export default AnimatedCursor; 