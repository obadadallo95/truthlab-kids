'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function TruthLabHeroScene() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0.25, 7.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.setSize(host.clientWidth, host.clientHeight);
    host.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const ambient = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambient);

    const key = new THREE.PointLight(0x2dd4bf, 22, 18);
    key.position.set(-3, 3, 5);
    scene.add(key);

    const warm = new THREE.PointLight(0xfacc15, 16, 14);
    warm.position.set(4, -2, 4);
    scene.add(warm);

    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x0f766e,
      roughness: 0.28,
      metalness: 0.52,
      emissive: 0x072f2e,
      emissiveIntensity: 0.34,
    });
    const core = new THREE.Mesh(new THREE.IcosahedronGeometry(1.22, 2), coreMaterial);
    group.add(core);

    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0xfacc15,
      transparent: true,
      opacity: 0.9,
      side: THREE.DoubleSide,
    });

    const rings = [
      new THREE.Mesh(new THREE.TorusGeometry(2.12, 0.018, 10, 160), ringMaterial),
      new THREE.Mesh(new THREE.TorusGeometry(2.62, 0.014, 10, 160), ringMaterial.clone()),
      new THREE.Mesh(new THREE.TorusGeometry(3.08, 0.01, 10, 160), ringMaterial.clone()),
    ];

    rings[0].rotation.x = Math.PI / 2.6;
    rings[1].rotation.y = Math.PI / 2.3;
    rings[2].rotation.x = Math.PI / 2.1;
    rings[2].rotation.z = Math.PI / 5;
    rings.forEach((ring) => group.add(ring));

    const dotMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const dots: THREE.Mesh[] = [];
    for (let i = 0; i < 34; i += 1) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;
      const radius = 2.95 + Math.random() * 1.15;
      const dot = new THREE.Mesh(new THREE.SphereGeometry(0.035 + Math.random() * 0.025, 10, 10), dotMaterial);
      dot.position.set(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      );
      dots.push(dot);
      group.add(dot);
    }

    const scanLine = new THREE.Mesh(
      new THREE.PlaneGeometry(5.2, 0.035),
      new THREE.MeshBasicMaterial({ color: 0x5eead4, transparent: true, opacity: 0.68 })
    );
    scanLine.position.z = 0.08;
    group.add(scanLine);

    const onResize = () => {
      const width = host.clientWidth || 1;
      const height = host.clientHeight || 1;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      const t = performance.now() * 0.001;

      group.rotation.y = t * 0.18;
      core.rotation.x = t * 0.34;
      core.rotation.y = t * 0.25;
      rings[0].rotation.z = t * 0.36;
      rings[1].rotation.x = Math.PI / 2.3 + Math.sin(t * 0.7) * 0.18;
      rings[2].rotation.y = t * -0.24;
      scanLine.position.y = Math.sin(t * 1.35) * 1.55;
      (scanLine.material as THREE.MeshBasicMaterial).opacity = 0.35 + Math.sin(t * 2.8) * 0.22;

      dots.forEach((dot, index) => {
        dot.scale.setScalar(0.78 + Math.sin(t * 1.8 + index) * 0.22);
      });

      renderer.render(scene, camera);
    };

    onResize();
    animate();
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      host.removeChild(renderer.domElement);
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
    };
  }, []);

  return <div ref={hostRef} className="pointer-events-none absolute inset-0 z-0 opacity-55" aria-hidden="true" />;
}
