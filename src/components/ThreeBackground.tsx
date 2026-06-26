import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Dimensions
    let width = container.clientWidth;
    let height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 250;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Node particles count
    const particleCount = 85;
    const positions = new Float32Array(particleCount * 3);
    const velocities: number[] = [];

    // Initialize positions and velocities
    for (let i = 0; i < particleCount; i++) {
      // Float positions inside a bounded 3D box
      positions[i * 3] = (Math.random() - 0.5) * 350;     // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 250; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 200; // z

      velocities.push(
        (Math.random() - 0.5) * 0.25, // vx
        (Math.random() - 0.5) * 0.25, // vy
        (Math.random() - 0.5) * 0.25  // vz
      );
    }

    // Geometry
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Material for particles (Dots)
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xFFC801, // Forsythia Accent
      size: 3.5,
      transparent: true,
      opacity: 0.25, // Lowered opacity so header dominates
      blending: THREE.AdditiveBlending
    });

    const particleSystem = new THREE.Points(geometry, particleMaterial);
    scene.add(particleSystem);

    // Line network geometry and material
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x114C5A, // Nocturnal Expedition teal
      transparent: true,
      opacity: 0.15, // Reduced from 0.35
      blending: THREE.AdditiveBlending
    });

    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(particleCount * particleCount * 6);
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));

    const lineSystem = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineSystem);

    // Interactive mouse positioning
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      // Normalized coordinates from -1 to 1
      const rect = container.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle container resizing cleanly via ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      if (!entries || entries.length === 0) return;
      const { width: newWidth, height: newHeight } = entries[0].contentRect;
      width = newWidth || 1;
      height = newHeight || 1;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    });
    
    resizeObserver.observe(container);

    // Animation loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Interpolate mouse movement (lerp)
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Rotate whole systems based on mouse position
      particleSystem.rotation.y = targetX * 0.45;
      particleSystem.rotation.x = -targetY * 0.45;
      lineSystem.rotation.y = targetX * 0.45;
      lineSystem.rotation.x = -targetY * 0.45;

      // Update particle positions and velocities
      const positionsArray = geometry.attributes.position.array as Float32Array;
      let lineIndex = 0;
      let connectedLinesCount = 0;

      for (let i = 0; i < particleCount; i++) {
        // Move particles
        positionsArray[i * 3] += velocities[i * 3];
        positionsArray[i * 3 + 1] += velocities[i * 3 + 1];
        positionsArray[i * 3 + 2] += velocities[i * 3 + 2];

        // Boundaries checks - elastic bounce
        const limitX = 175;
        const limitY = 125;
        const limitZ = 100;

        if (Math.abs(positionsArray[i * 3]) > limitX) velocities[i * 3] *= -1;
        if (Math.abs(positionsArray[i * 3 + 1]) > limitY) velocities[i * 3 + 1] *= -1;
        if (Math.abs(positionsArray[i * 3 + 2]) > limitZ) velocities[i * 3 + 2] *= -1;
      }

      // Re-link particles closer than threshold
      const linePositionsArray = lineGeometry.attributes.position.array as Float32Array;
      const connectionThreshold = 65;

      for (let i = 0; i < particleCount; i++) {
        const x1 = positionsArray[i * 3];
        const y1 = positionsArray[i * 3 + 1];
        const z1 = positionsArray[i * 3 + 2];

        for (let j = i + 1; j < particleCount; j++) {
          const x2 = positionsArray[j * 3];
          const y2 = positionsArray[j * 3 + 1];
          const z2 = positionsArray[j * 3 + 2];

          const dx = x2 - x1;
          const dy = y2 - y1;
          const dz = z2 - z1;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < connectionThreshold) {
            // Draw line segment
            linePositionsArray[lineIndex++] = x1;
            linePositionsArray[lineIndex++] = y1;
            linePositionsArray[lineIndex++] = z1;

            linePositionsArray[lineIndex++] = x2;
            linePositionsArray[lineIndex++] = y2;
            linePositionsArray[lineIndex++] = z2;

            connectedLinesCount++;
          }
        }
      }

      // Tell three.js to update the attributes
      geometry.attributes.position.needsUpdate = true;
      lineGeometry.attributes.position.needsUpdate = true;
      lineGeometry.setDrawRange(0, connectedLinesCount * 2);

      // Slow rotational drift
      particleSystem.rotation.z += 0.0006;
      lineSystem.rotation.z += 0.0006;

      renderer.render(scene, camera);
    };

    // Start animation loop
    animate();

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      // Dispose threejs structures
      geometry.dispose();
      lineGeometry.dispose();
      particleMaterial.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="three-canvas-container"
      className="absolute inset-0 w-full h-full pointer-events-none opacity-20 md:opacity-30 transition-opacity duration-700"
      style={{ zIndex: 1 }}
    />
  );
}
