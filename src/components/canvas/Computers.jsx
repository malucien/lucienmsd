import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { meshBounds, OrbitControl,  Preload, useGLTF } from "@react-three/drei";
import { CanvasLoader } from "../Loader";

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gtlf')
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
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
      <Suspense fallback = {<CanvasLoader/>}>
        
      </Suspense>

    </canvas>
  )
}

export default Computers