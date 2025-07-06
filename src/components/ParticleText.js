import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ParticleText = ({ text = 'TUSHAR JAIN', size = 70, color = '#ffffff', hoveredColor = '#60a5fa' }) => {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const particlesRef = useRef(null);
  const raycasterRef = useRef(null);
  const mouseRef = useRef(new THREE.Vector2());

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Initialize camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 20;
    cameraRef.current = camera;

    // Initialize renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create canvas for text
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 1024;
    canvas.height = 256;
    context.fillStyle = '#000000';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.font = `bold ${size}px Arial`;
    context.fillStyle = '#ffffff';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(text, canvas.width / 2, canvas.height / 2);

    // Get pixel data
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    // Create particles
    const geometry = new THREE.BufferGeometry();
    const positions = [];
    const colors = [];
    const originalColors = [];
    const sizes = [];

    const color = new THREE.Color();
    const baseColor = new THREE.Color(0x3b82f6);

    for (let y = 0; y < canvas.height; y += 4) {
      for (let x = 0; x < canvas.width; x += 4) {
        const index = (y * canvas.width + x) * 4;
        if (data[index] > 128) {
          const posX = (x - canvas.width / 2) * 0.05;
          const posY = (canvas.height / 2 - y) * 0.05;
          const posZ = 0;

          positions.push(posX, posY, posZ);

          color.set(baseColor);
          originalColors.push(color.r, color.g, color.b);
          colors.push(color.r, color.g, color.b);
          
          sizes.push(Math.random() * 2 + 1);
        }
      }
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));

    // Create material
    const material = new THREE.PointsMaterial({
      size: 0.5,
      vertexColors: true,
      transparent: true,
    });

    // Create point cloud
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
    particlesRef.current = particles;

    // Setup raycaster for interactivity
    raycasterRef.current = new THREE.Raycaster();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    // Handle mouse move
    const handleMouseMove = (event) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    // Animation loop
    let frame = 0;
    const animate = () => {
      requestAnimationFrame(animate);

      frame += 0.01;

      if (particlesRef.current) {
        particlesRef.current.rotation.y = Math.sin(frame * 0.5) * 0.2;
        particlesRef.current.rotation.x = Math.cos(frame * 0.3) * 0.1;

        // Update particle positions for wave effect
        const positions = particlesRef.current.geometry.attributes.position.array;
        const originalPositions = [...positions];
        
        for (let i = 0; i < positions.length; i += 3) {
          positions[i + 2] = Math.sin((i + frame * 10) * 0.1) * 0.5;
        }
        
        particlesRef.current.geometry.attributes.position.needsUpdate = true;

        // Raycaster for hover effects
        raycasterRef.current.setFromCamera(mouseRef.current, camera);
        const intersects = raycasterRef.current.intersectObject(particlesRef.current);

        if (intersects.length > 0) {
          const { index } = intersects[0];
          const colors = particlesRef.current.geometry.attributes.color.array;
          const hoverColor = new THREE.Color(hoveredColor);
          
          colors[index * 3] = hoverColor.r;
          colors[index * 3 + 1] = hoverColor.g;
          colors[index * 3 + 2] = hoverColor.b;
          
          particlesRef.current.geometry.attributes.color.needsUpdate = true;
        }
      }

      renderer.render(scene, camera);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
    };
  }, [text, size, hoveredColor]);

  return <div ref={containerRef} className="absolute inset-0 z-10" />;
};

export default ParticleText; 