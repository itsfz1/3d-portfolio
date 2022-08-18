import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Loader } from "./components/Loader"
import { Model } from "./components/Model"
import { About } from "./components/About"
import "./App.css"

const App = () => {
  return (
    <Canvas id="canvas1" camera={{ position: [2, 0, 12.25], fov: 25 }}>
      <OrbitControls />
      <ambientLight intensity={1.25} />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.4} />
      <About />
      <Suspense fallback={<Loader />}>
        <Model position={[0.025, -2.4, 0]} scale={2.5} rotation-y={0.15} />
      </Suspense>
    </Canvas>
  )
}

export default App
