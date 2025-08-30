"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Geometry, Base, Subtraction} from '@react-three/csg'
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { Bloom, N8AO, SMAA, EffectComposer } from '@react-three/postprocessing'
import { useRef } from "react";
import { Mesh } from "three";
import { KernelSize } from "postprocessing";
import { Award } from "lucide-react";

function Shape() {
  const meshRef = useRef<Mesh>(null);
  const innerSphereRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.15;
      meshRef.current.rotation.z += delta * 0.05;
    }
    if (innerSphereRef.current) {
      innerSphereRef.current.rotation.x += delta * 0.15;
      innerSphereRef.current.rotation.y += delta * 0.1;
      innerSphereRef.current.rotation.z += delta * 0.02;
    }
  });

  return (
    <>
      <mesh ref={meshRef}>
        <meshPhysicalMaterial 
          roughness={0}
          metalness={0.95}
          clearcoat={1}
          clearcoatRoughness={0.1}
          color="#000000"
        />

        <Geometry>
          <Base>
            <primitive
              object={new RoundedBoxGeometry(2, 2, 2, 7, 0.2)}
            />
          </Base>

          <Subtraction>
            <sphereGeometry args={[1.25, 64, 64]} />
          </Subtraction>
        </Geometry>
      </mesh>
      
      <mesh ref={innerSphereRef}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshPhysicalMaterial 
          color="#ffffff"
          emissive={"white"}
          emissiveIntensity={1}
        />
      </mesh>
    </>
  );
}

function Environment() {
  return (
    <>
      
      <directionalLight 
        position={[-5, 5, -5]} 
        intensity={0.2} 
        color="#e6f3ff"
      />
      
      <directionalLight 
        position={[0, -5, 10]} 
        intensity={0.4} 
        color="#fff5e6"
      />
      
      <ambientLight intensity={0.8} color="#404040" />
      
      <pointLight 
        position={[8, 3, 8]} 
        intensity={0.2} 
        color="#ffeecc"
        distance={20}
      />
      
      <pointLight 
        position={[-8, 3, -8]} 
        intensity={0.2} 
        color="#ccf0ff"
        distance={20}
      />
      
      <directionalLight 
        position={[0, -10, 0]} 
        intensity={0.2} 
        color="#f0f0f0"
      />
    </>
  );
}

function Scene() {
  return (
    <Canvas
      className="w-full h-full"
      camera={{ position: [5, 5, 5], fov: 50 }}
    >
      <Environment />
      <Shape />
      <EffectComposer multisampling={0}>
        <N8AO halfRes color="black" aoRadius={2} intensity={1} aoSamples={6} denoiseSamples={4} />
        <Bloom
          kernelSize={3}
          luminanceThreshold={0}
          luminanceSmoothing={0.4}
          intensity={0.6}
        />
        <Bloom
          kernelSize={KernelSize.HUGE}
          luminanceThreshold={0}
          luminanceSmoothing={0}
          intensity={0.5}
        />
        <SMAA />
      </EffectComposer>
    </Canvas>
  );
}

function Navbar({ links }: { links: Array<{ name: string; href: string }> }) {

  return (
    <nav className="absolute top-4 left-4 right-4 md:top-10 md:left-10 md:right-10 z-30 flex justify-between items-center">
       <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
          <Award className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-bold text-white mix-blend-difference">PrimoBoostAi</span>
      </div>
      <ul className="hidden md:flex gap-8 lg:gap-12">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="text-sm font-light tracking-[0.2em] mix-blend-difference text-white hover:opacity-70 transition-opacity duration-300"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      
      <ul className="md:hidden flex flex-col gap-3 items-end">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="text-xs font-light tracking-[0.15em] mix-blend-difference text-white hover:opacity-70 transition-opacity duration-300"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

interface HeroProps {
  title: string;
  description: string;
  links: Array<{ name: string; href: string }>;
}

export const Hero: React.FC<HeroProps> = ({ title, description, links }) => {
  return (
    <div className="h-svh w-screen relative bg-[#0A0A0A]">
      <Navbar links={links} />
      <div className="absolute inset-0 z-0">
        <Scene />
      </div>
      <div className="absolute bottom-4 left-4 md:bottom-10 md:left-10 z-20 max-w-md">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
            {title}
        </h1>
        <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 font-light">
            {description}
        </p>
         <button 
            onClick={() => {
                const registrationSection = document.getElementById('registration');
                if (registrationSection) {
                    registrationSection.scrollIntoView({ behavior: 'smooth' });
                }
            }}
            className="bg-gradient-to-r from-blue-400 to-purple-400 text-white font-medium py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:from-blue-500 hover:to-purple-500 focus:outline-none focus:ring-4 focus:ring-blue-400/50"
          >
            Reserve My Free Seat
          </button>
      </div>
    </div>
  );
}
