import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import  canvasLoader  from "../Loader";

const Computers = () => {
  const Computers = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <primitive
        object={Computer.scene}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <canvas
      frameLoop="demand"
      shadows
      camera={{position: [20, 3, 5], fov:25}}
      gL={{preseveDrawingBuffer: true}}
    >
      <Suspense fallback = {<canvasLoader/>}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Suspense>
      <Preload all />
    </canvas>
  )
}

export default Computers