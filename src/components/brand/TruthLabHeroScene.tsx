'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Sparkles } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import { MutableRefObject, useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';

type ScenePointer = MutableRefObject<THREE.Vector2>;

function useGlobalPointer() {
  const pointer = useRef(new THREE.Vector2(0, 0));

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      pointer.current.set(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
      );
    };
    const onLeave = () => pointer.current.set(0, 0);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerleave', onLeave);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return pointer;
}

function CameraRig({ pointer }: { pointer: ScenePointer }) {
  useFrame(({ camera }) => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.current.x * 0.38, 0.045);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, 0.35 + pointer.current.y * 0.16, 0.045);
    camera.lookAt(0.72, -0.16, 0);
  });

  return null;
}

function InvestigationTable() {
  return (
    <group position={[0.76, -1.16, -0.18]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <boxGeometry args={[4.7, 3.1, 0.16]} />
        <meshStandardMaterial color="#12151C" metalness={0.2} roughness={0.85} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.014, 0]}>
        <planeGeometry args={[4.25, 2.72]} />
        <meshBasicMaterial color="#5AFFD5" transparent opacity={0.035} />
      </mesh>
      {[-1.7, -0.8, 0.1, 1.0, 1.9].map((x) => (
        <mesh key={x} rotation={[-Math.PI / 2, 0, 0]} position={[x, 0.022, 0]}>
          <boxGeometry args={[0.006, 2.58, 0.004]} />
          <meshBasicMaterial color="#E8E4DC" transparent opacity={0.055} />
        </mesh>
      ))}
    </group>
  );
}

function NetworkGraph({ pointer }: { pointer: ScenePointer }) {
  const group = useRef<THREE.Group>(null);
  const points = useMemo(() => {
    return Array.from({ length: 82 }, (_, index) => {
      const column = (index % 13) - 6;
      const row = Math.floor(index / 13) - 3;
      const z = Math.sin(index * 1.91) * 0.9 - 0.2;
      return new THREE.Vector3(column * 0.42, row * 0.32, z);
    });
  }, []);

  const geometry = useMemo(() => {
    const positions: number[] = [];
    points.forEach((point, index) => {
      const next = points[index + 1];
      const jump = points[index + 13];
      if (next && index % 13 !== 12) positions.push(point.x, point.y, point.z, next.x, next.y, next.z);
      if (jump) positions.push(point.x, point.y, point.z, jump.x, jump.y, jump.z);
    });
    const buffer = new THREE.BufferGeometry();
    buffer.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    return buffer;
  }, [points]);

  useFrame(() => {
    if (!group.current) return;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, -0.2 + pointer.current.x * 0.18, 0.04);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -0.1 + pointer.current.y * 0.07, 0.04);
  });

  return (
    <group ref={group} position={[0.5, 0.08, -1.18]}>
      <lineSegments geometry={geometry}>
        <lineBasicMaterial color="#5AFFD5" transparent opacity={0.12} />
      </lineSegments>
      {points.map((point, index) => (
        <mesh key={`${point.x}-${point.y}-${index}`} position={point}>
          <boxGeometry args={[index % 9 === 0 ? 0.045 : 0.024, index % 9 === 0 ? 0.045 : 0.024, 0.024]} />
          <meshBasicMaterial color={index % 11 === 0 ? '#D4853A' : '#E8E4DC'} transparent opacity={index % 9 === 0 ? 0.68 : 0.34} />
        </mesh>
      ))}
    </group>
  );
}

function DocumentCard({ index }: { index: number }) {
  return (
    <group>
      <mesh>
        <boxGeometry args={[0.72, 1.02, 0.016]} />
        <meshStandardMaterial color={index === 0 ? '#C8BA9E' : '#A99D86'} roughness={0.94} metalness={0.02} />
      </mesh>
      {[0.22, 0.08, -0.06].map((y, lineIndex) => (
        <mesh key={lineIndex} position={[-0.08, y, 0.011]}>
          <boxGeometry args={[0.42 - lineIndex * 0.08, 0.018, 0.006]} />
          <meshBasicMaterial color={lineIndex === 1 ? '#C94040' : '#12151C'} transparent opacity={lineIndex === 1 ? 0.88 : 0.46} />
        </mesh>
      ))}
    </group>
  );
}

function EvidenceRoomObjects({ pointer }: { pointer: ScenePointer }) {
  const group = useRef<THREE.Group>(null);
  const documents = useRef<Array<THREE.Group | null>>([]);
  const signalPanels = useRef<Array<THREE.Group | null>>([]);
  const loupe = useRef<THREE.Group>(null);
  const screen = useRef<THREE.Group>(null);

  const documentTargets = [
    [-1.15, 0.2, 0.28],
    [-0.58, 0.05, 0.2],
    [0.02, -0.08, 0.12],
    [0.58, -0.22, 0.04],
  ] as const;
  const panelTargets = [
    [1.56, 0.78, 0.26],
    [1.84, 0.14, 0.38],
    [1.48, -0.52, 0.3],
  ] as const;

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const spread = Math.min(1, Math.hypot(pointer.current.x, pointer.current.y) * 2.05);
    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, -0.32 + pointer.current.x * 0.24, 0.045);
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -0.06 + pointer.current.y * 0.07, 0.045);
    }
    documents.current.forEach((document, index) => {
      if (!document) return;
      const target = documentTargets[index];
      document.position.x = THREE.MathUtils.lerp(-0.35 + index * 0.13, target[0], spread) + pointer.current.x * (0.035 + index * 0.02);
      document.position.y = THREE.MathUtils.lerp(0.02 - index * 0.045, target[1], spread) + Math.sin(t * 0.44 + index) * 0.01;
      document.position.z = THREE.MathUtils.lerp(-0.05 * index, target[2], spread);
      document.rotation.y = THREE.MathUtils.lerp(-0.05 + index * 0.035, -0.2 + index * 0.13, spread);
      document.rotation.z = THREE.MathUtils.lerp(-0.02 + index * 0.014, -0.12 + index * 0.06, spread);
    });
    signalPanels.current.forEach((panel, index) => {
      if (!panel) return;
      const target = panelTargets[index];
      panel.position.x = THREE.MathUtils.lerp(0.7 + index * 0.09, target[0], spread) + pointer.current.x * (0.08 + index * 0.02);
      panel.position.y = THREE.MathUtils.lerp(0.16 - index * 0.04, target[1], spread) + pointer.current.y * 0.04;
      panel.position.z = THREE.MathUtils.lerp(0.22 + index * 0.05, target[2], spread);
      panel.rotation.y = THREE.MathUtils.lerp(-0.08, -0.34, spread);
    });
    if (loupe.current) {
      loupe.current.position.x = THREE.MathUtils.lerp(0.18, -0.16, spread) + pointer.current.x * 0.16;
      loupe.current.position.y = THREE.MathUtils.lerp(0.2, 0.48, spread) + pointer.current.y * 0.08;
      loupe.current.position.z = THREE.MathUtils.lerp(0.72, 0.9, spread);
      loupe.current.rotation.z = THREE.MathUtils.lerp(-0.18, -0.34, spread);
      loupe.current.rotation.y = pointer.current.x * 0.08;
    }
    if (screen.current) {
      screen.current.position.x = THREE.MathUtils.lerp(0.22, 0.72, spread) + pointer.current.x * 0.06;
      screen.current.position.y = THREE.MathUtils.lerp(-0.16, -0.28, spread);
      screen.current.rotation.y = THREE.MathUtils.lerp(-0.08, -0.28, spread) + pointer.current.x * 0.04;
      screen.current.rotation.z = Math.sin(t * 0.65) * 0.008;
    }
  });

  return (
    <group ref={group} position={[0.82, -0.14, 0.08]}>
      {documentTargets.map((_, index) => (
        <group key={index} ref={(node) => { documents.current[index] = node; }}>
          <DocumentCard index={index} />
        </group>
      ))}

      <group ref={screen} position={[0.22, -0.16, 0.22]} rotation={[0, -0.08, -0.04]}>
        <mesh>
          <boxGeometry args={[0.92, 0.58, 0.035]} />
          <meshPhysicalMaterial color="#12151C" roughness={0.08} metalness={0.2} transmission={0.22} thickness={0.32} transparent opacity={0.78} />
        </mesh>
        <mesh position={[0, 0, 0.022]}>
          <planeGeometry args={[0.78, 0.43]} />
          <meshBasicMaterial color="#3B7DD8" transparent opacity={0.18} />
        </mesh>
        {[-0.18, 0.14].map((x, index) => (
          <mesh key={x} position={[x, index === 0 ? 0.06 : -0.04, 0.026]} rotation={[0, 0, index === 0 ? 0.5 : -0.72]}>
            <boxGeometry args={[0.005, index === 0 ? 0.5 : 0.38, 0.004]} />
            <meshBasicMaterial color="#E8E4DC" transparent opacity={0.34} />
          </mesh>
        ))}
      </group>

      <group ref={loupe} position={[0.18, 0.2, 0.72]} rotation={[0.08, 0, -0.18]}>
        <mesh>
          <torusGeometry args={[0.24, 0.018, 18, 96]} />
          <meshStandardMaterial color="#C8BA9E" roughness={0.22} metalness={0.62} />
        </mesh>
        <mesh>
          <circleGeometry args={[0.225, 64]} />
          <meshPhysicalMaterial color="#E8E4DC" roughness={0.02} metalness={0} transmission={0.82} thickness={0.5} transparent opacity={0.34} />
        </mesh>
        <mesh position={[0.21, -0.26, 0]} rotation={[0, 0, -0.62]}>
          <boxGeometry args={[0.045, 0.56, 0.04]} />
          <meshStandardMaterial color="#1E2330" roughness={0.34} metalness={0.55} />
        </mesh>
      </group>

      {panelTargets.map((_, index) => (
        <group key={index} ref={(node) => { signalPanels.current[index] = node; }}>
          <mesh>
            <boxGeometry args={[0.78, 0.38, 0.018]} />
            <meshStandardMaterial color="#12151C" emissive="#0b2a28" emissiveIntensity={0.16} roughness={0.2} metalness={0.2} transparent opacity={0.82} />
          </mesh>
          {[0.09, 0, -0.09].map((y, lineIndex) => (
            <mesh key={lineIndex} position={[0, y, 0.014]}>
              <boxGeometry args={[0.48 - lineIndex * 0.12, 0.008, 0.004]} />
              <meshBasicMaterial color={index === 2 ? '#D4853A' : '#5AFFD5'} transparent opacity={0.7} />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  );
}

export default function TruthLabHeroScene() {
  const pointer = useGlobalPointer();

  return (
    <div className="truthlab-hero-scene" aria-hidden="true">
      <Canvas dpr={[1, 1.6]} gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}>
        <PerspectiveCamera makeDefault fov={39} position={[0, 0.35, 6.5]} />
        <CameraRig pointer={pointer} />
        <color attach="background" args={['#0A0B0E']} />
        <fog attach="fog" args={['#0A0B0E', 5.4, 11.8]} />
        <ambientLight intensity={0.34} />
        <directionalLight position={[-2.8, 4.2, 3.2]} intensity={1.4} color="#E8E4DC" />
        <hemisphereLight args={['#3B7DD8', '#D4853A', 0.32]} />
        <spotLight position={[2.2, 2.8, 2.4]} angle={0.38} penumbra={0.75} intensity={0.9} color="#3B4FD4" />
        <InvestigationTable />
        <NetworkGraph pointer={pointer} />
        <EvidenceRoomObjects pointer={pointer} />
        <Sparkles count={42} scale={[6.4, 3.2, 3.4]} size={0.8} speed={0.08} opacity={0.18} color="#E8E4DC" />
        <EffectComposer multisampling={0}>
          <Bloom luminanceThreshold={0.28} luminanceSmoothing={0.7} intensity={0.2} mipmapBlur />
          <Vignette eskil={false} offset={0.26} darkness={0.56} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
