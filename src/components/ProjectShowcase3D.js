import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ProjectShowcase3D = ({ projects }) => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);
  const projectMeshesRef = useRef([]);
  const raycasterRef = useRef(null);
  const mouseRef = useRef(new THREE.Vector2());
  const [activeProject, setActiveProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);

  // Set up the 3D scene
  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x111827); // Dark background color
    scene.fog = new THREE.Fog(0x111827, 10, 50);
    sceneRef.current = scene;

    // Initialize camera
    const camera = new THREE.PerspectiveCamera(
      60,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 15);
    cameraRef.current = camera;

    // Initialize renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.setClearColor(0x111827, 1); // Set clear color to match scene background
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Add point lights for better visibility
    const pointLight1 = new THREE.PointLight(0x3b82f6, 2, 50);
    pointLight1.position.set(-5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x60a5fa, 2, 50);
    pointLight2.position.set(5, -5, 5);
    scene.add(pointLight2);

    // Add controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.maxPolarAngle = Math.PI / 2;
    controls.minDistance = 5;
    controls.maxDistance = 30;
    controlsRef.current = controls;

    // Initialize raycaster
    raycasterRef.current = new THREE.Raycaster();

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      
      // Dispose of resources
      projectMeshesRef.current.forEach(mesh => {
        mesh.geometry.dispose();
        mesh.material.dispose();
      });
    };
  }, []);

  // Create project meshes
  useEffect(() => {
    if (!sceneRef.current || !projects || projects.length === 0) return;

    // Remove any existing project meshes
    projectMeshesRef.current.forEach(mesh => {
      sceneRef.current.remove(mesh);
      mesh.geometry.dispose();
      mesh.material.dispose();
    });
    projectMeshesRef.current = [];

    // Create new project meshes
    const radius = 10;
    const projectMeshes = [];

    projects.forEach((project, index) => {
      // Calculate position on a circle
      const angle = (index / projects.length) * Math.PI * 2;
      const x = radius * Math.cos(angle);
      const z = radius * Math.sin(angle);

      // Create project mesh (cube)
      const geometry = new THREE.BoxGeometry(3, 3, 3);
      const material = new THREE.MeshStandardMaterial({
        color: 0x3b82f6,
        metalness: 0.7,
        roughness: 0.3,
        emissive: 0x101010, // Add slight emissive for better visibility
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(x, 0, z);
      mesh.lookAt(0, 0, 0);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      mesh.userData = { project, index };

      sceneRef.current.add(mesh);
      projectMeshes.push(mesh);
    });

    projectMeshesRef.current = projectMeshes;
  }, [projects]);

  // Handle mouse interactions
  useEffect(() => {
    if (!containerRef.current) return;

    const handleMouseMove = (event) => {
      const rect = containerRef.current.getBoundingClientRect();
      mouseRef.current.x = ((event.clientX - rect.left) / containerRef.current.clientWidth) * 2 - 1;
      mouseRef.current.y = -((event.clientY - rect.top) / containerRef.current.clientHeight) * 2 + 1;
    };

    const handleClick = () => {
      if (hoveredProject) {
        setActiveProject(hoveredProject);
      }
    };

    containerRef.current.addEventListener('mousemove', handleMouseMove);
    containerRef.current.addEventListener('click', handleClick);

    return () => {
      containerRef.current?.removeEventListener('mousemove', handleMouseMove);
      containerRef.current?.removeEventListener('click', handleClick);
    };
  }, [hoveredProject]);

  // Animation loop
  useEffect(() => {
    if (!sceneRef.current || !cameraRef.current || !rendererRef.current) return;

    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Update controls
      if (controlsRef.current) {
        controlsRef.current.update();
      }

      // Handle hover effects
      if (raycasterRef.current && cameraRef.current && projectMeshesRef.current.length > 0) {
        raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
        const intersects = raycasterRef.current.intersectObjects(projectMeshesRef.current);

        // Reset all project meshes
        projectMeshesRef.current.forEach(mesh => {
          if (mesh.userData.project !== activeProject?.project) {
            mesh.material.color.set(0x3b82f6);
            mesh.scale.set(1, 1, 1);
            mesh.material.emissive.set(0x101010);
          }
        });

        // Set hovered project
        if (intersects.length > 0) {
          const hoveredMesh = intersects[0].object;
          hoveredMesh.material.color.set(0x60a5fa);
          hoveredMesh.material.emissive.set(0x303030);
          hoveredMesh.scale.set(1.1, 1.1, 1.1);
          setHoveredProject(hoveredMesh.userData);
        } else {
          setHoveredProject(null);
        }
      }

      // Animate project meshes
      projectMeshesRef.current.forEach((mesh, index) => {
        mesh.rotation.y += 0.01;
        mesh.rotation.x += 0.005;
        
        // Add subtle floating animation
        mesh.position.y = Math.sin(Date.now() * 0.001 + index) * 0.5;
      });

      // Render scene
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeProject]);

  return (
    <div className='relative w-full h-[600px]'>
      <div ref={containerRef} className='w-full h-full rounded-lg overflow-hidden' />
      
      {/* Project details overlay */}
      {activeProject && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 p-6 rounded-t-lg'
        >
          <h3 className='text-2xl font-bold mb-2'>{activeProject.project.title}</h3>
          <p className='text-gray-300 mb-4'>{activeProject.project.description}</p>
          <div className='flex justify-between items-center'>
            <a
              href={activeProject.project.url}
              target='_blank'
              rel='noopener noreferrer'
              className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors'
            >
              View Project
            </a>
            <button
              onClick={() => setActiveProject(null)}
              className='text-gray-400 hover:text-white transition-colors'
            >
              Close
            </button>
          </div>
        </motion.div>
      )}

      {/* Hover indicator */}
      {hoveredProject && !activeProject && (
        <div className='absolute top-4 left-4 bg-black bg-opacity-70 p-2 rounded'>
          <p className='text-white'>{hoveredProject.project.title}</p>
        </div>
      )}
    </div>
  );
};

export default ProjectShowcase3D;
