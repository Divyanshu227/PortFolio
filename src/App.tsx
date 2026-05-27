import GradientText from "@/components/ui/gradient-text"
import Navbar from './components/Navbar'
import EvilEye from "./components/ui/EvilEye"
export default function App() {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <EvilEye
        eyeColor="#323ff"
        intensity={1.5}
        pupilSize={0.1}
        irisWidth={0.25}
        glowIntensity={0.35}
        scale={1.0}
        noiseScale={2.1}
        pupilFollow={1.5}
        flameSpeed={1}
        backgroundColor="#000000"
      >
        <main className="mx-auto max-w-7xl px-6 py-12 pt-28">
          <GradientText
            colors={['#5227FF', '#FF9FFC', '#B497CF']}
            animationSpeed={8}
            pauseOnHover
            yoyo
            className="z-1"
          >
            <h1 className="text-4xl font-bold tracking-wide">Welcome to My Portfolio</h1>
          </GradientText>

          <p className="mt-4 text-lg text-gray-300">
            Hi! I'm Divya, a passionate developer with experience in building web applications. Explore my projects and skills below.
          </p>
        </main>
      </EvilEye>
    </div>
  )
}