import { useProgress, Html } from "@react-three/drei"

export const Loader = () => {
  const { progress } = useProgress()
  return (
    <Html center>
      <p className="loader">{progress} % loaded</p>
    </Html>
  )
}
