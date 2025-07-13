import { useRef, useEffect, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';

const SkillsGlobe = ({ skills = [
  'React', 'Next.js', 'Three.js', 'JavaScript', 'TypeScript', 
  'Node.js', 'MongoDB', 'GraphQL', 'TailwindCSS', 'Framer Motion',
  'Python', 'Django', 'AWS', 'Docker', 'Git', 'CI/CD'
] }) => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);
  const skillObjectsRef = useRef([]);
  const raycasterRef = useRef(null);
  const mouseRef = useRef(new THREE.Vector2());
  const hoveredSkillRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const currentContainer = containerRef.current; // Capture for cleanup

    // Initialize scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Initialize camera
    const camera = new THREE.PerspectiveCamera(75, currentContainer.clientWidth / currentContainer.clientHeight, 0.1, 1000);
    camera.position.z = 30;
    cameraRef.current = camera;

    // Initialize renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(currentContainer.clientWidth, currentContainer.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentContainer.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Add controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.5;
    controls.enableZoom = false;
    controlsRef.current = controls;

    // Initialize raycaster
    raycasterRef.current = new THREE.Raycaster();

    // Load font
    const fontLoader = new FontLoader();
    
    fontLoader.load('/fonts/helvetiker_regular.typeface.json', (font) => {
      const radius = 15;
      const skillObjects = [];
      
      // Create skill text meshes and position them on a sphere
      skills.forEach((skill, index) => {
        const phi = Math.acos(-1 + (2 * index) / skills.length);
        const theta = Math.sqrt(skills.length * Math.PI) * phi;
        
        const textGeometry = new TextGeometry(skill, {
          font: font,
          size: 1,
          height: 0.2,
        });
        
        textGeometry.computeBoundingBox();
        const centerOffset = -0.5 * (textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x);
        
        const material = new THREE.MeshStandardMaterial({ 
          color: 0x3b82f6,
          emissive: 0x101010,
        });
        
        const textMesh = new THREE.Mesh(textGeometry, material);
        
        // Position on sphere
        textMesh.position.x = radius * Math.sin(phi) * Math.cos(theta) + centerOffset;
        textMesh.position.y = radius * Math.cos(phi);
        textMesh.position.z = radius * Math.sin(phi) * Math.sin(theta);
        
        // Look at center
        textMesh.lookAt(0, 0, 0);
        
        // Store original color for hover effect
        textMesh.userData = { originalColor: material.color.clone(), skill };
        
        scene.add(textMesh);
        skillObjects.push(textMesh);
      });
      
      skillObjectsRef.current = skillObjects;
    });

    // Handle window resize
    const handleResize = useCallback(() => {
      if (!currentContainer) return;
      
      camera.aspect = currentContainer.clientWidth / currentContainer.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentContainer.clientWidth, currentContainer.clientHeight);
    }, [camera, renderer, currentContainer]);

    // Handle mouse move for hover effects
    const handleMouseMove = useCallback((event) => {
      if (!currentContainer) return;
      const rect = currentContainer.getBoundingClientRect();
      mouseRef.current.x = ((event.clientX - rect.left) / currentContainer.clientWidth) * 2 - 1;
      mouseRef.current.y = -((event.clientY - rect.top) / currentContainer.clientHeight) * 2 + 1;
    }, [currentContainer]);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      if (controlsRef.current) {
        controlsRef.current.update();
      }
      
      // Handle hover effects
      if (raycasterRef.current && cameraRef.current && skillObjectsRef.current.length > 0) {
        raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
        const intersects = raycasterRef.current.intersectObjects(skillObjectsRef.current);
        
        // Reset previously hovered skill
        if (hoveredSkillRef.current && (!intersects.length || intersects[0].object !== hoveredSkillRef.current)) {
          hoveredSkillRef.current.material.color.copy(hoveredSkillRef.current.userData.originalColor);
          hoveredSkillRef.current.material.emissive.set(0x101010);
          hoveredSkillRef.current = null;
        }
        
        // Set new hovered skill
        if (intersects.length && intersects[0].object !== hoveredSkillRef.current) {
          hoveredSkillRef.current = intersects[0].object;
          hoveredSkillRef.current.material.color.set(0x60a5fa);
          hoveredSkillRef.current.material.emissive.set(0x303030);
        }
      }
      
      renderer.render(scene, camera);
    };

    window.addEventListener('resize', handleResize);
    currentContainer.addEventListener('mousemove', handleMouseMove);
    
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      currentContainer?.removeEventListener('mousemove', handleMouseMove);
      
      if (currentContainer && rendererRef.current) {
        currentContainer.removeChild(rendererRef.current.domElement);
      }
      
      // Dispose of resources
      skillObjectsRef.current.forEach(mesh => {
        mesh.geometry.dispose();
        mesh.material.dispose();
      });
    };
  }, [skills]);

  return (
    <div ref={containerRef} className="w-full h-[500px] rounded-lg overflow-hidden" />
  );
};

export default SkillsGlobe; 