import { useRef, useState, useEffect, useMemo } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import { useDrag } from '@use-gesture/react'
import { useSpring, a } from '@react-spring/three'
import { Model } from './Animated Robot'
import { Float, Html } from '@react-three/drei'
import * as THREE from 'three'

const messages = [
  "Hey there! Ever wondered how AI generates stunning images? Check out my Diffusion Models project in the Projects section! The research sidebar has my deep dive into denoising diffusion probabilistic models too! 🎨✨",
  "Curious about robots that learn smarter, not harder? My Model-Based RL with MPC project shows how AI can learn world models and plan ahead! Check the research sidebar for reinforcement learning fundamentals! 🤖🧠",
  "Computer vision is fascinating! I built an Industrial Anomaly Detection system using Vision Transformers and Capsule Networks. See it in Projects, and explore computer vision research in the sidebar! 👁️🔍",
  "Comic books meet AI! My ComicPaliGemma project transforms comics into interactive AI companions using Google's PaliGemma. It's a visual language model that generates coherent narratives! 📚🤖",
  "Grounded Theory research just got an AI upgrade! I collaborated with NICC Brussels on LLM-driven qualitative research automation. Check out the project and read about transformers in the research sidebar! 📝🔬",
  "Sparse reward problems in reinforcement learning are tough! My Multi-Goal RL Pipeline uses curriculum learning and HER to boost success rates. The research sidebar covers RL fundamentals! 🎯🚀",
  "Ever wanted to predict sports outcomes? My NCAA Women's Basketball predictive modeling project ranked in the top 5 of 67 teams! Used machine learning for data-driven insights! 🏀📊",
  "Robotic path planning with reinforcement learning! I implemented DQL, REINFORCE, PPO, and TRPO algorithms in PyTorch. Perfect for autonomous navigation! 🤖🛤️",
  "Serverless computing on Google Cloud! My distributed matrix multiplication project uses Cloud Functions, Redis, and Pub/Sub for scalable computation! ☁️🔢",
  "Sports analytics with machine learning! My basketball prediction models revealed strategies for 15% revenue growth and 10% fan engagement improvements! 📈🏀"
];

export default function DraggableRobot({ scale = 0.15, onOpenResearch, ...props }) {
  const meshRef = useRef()
  const { size, viewport } = useThree()
  const aspect = size.width / viewport.width

  const center = new THREE.Vector3(0, 0, 0)
  const numPoints = 6
  const lapDuration = 6 // seconds for full lap (leisurely flying)

  // Generate random waypoints around the center inside a radius box
  const waypoints = useMemo(() => {
    const points = []
    for (let i = 0; i < numPoints; i++) {
      points.push(
        new THREE.Vector3(
          center.x + (Math.random() - 0.5) * 3,
          center.y + (Math.random() - 0.2) * 1,
          center.z + (Math.random() - 0.5) * 3
        )
      )
    }
    // Close the loop by repeating first point
    points.push(points[0].clone())
    return points
  }, [center])

  // Create a smooth curve (Catmull-Rom spline) through the waypoints
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(waypoints, true, 'catmullrom', 0.3)
  }, [waypoints])

  // Spring for drag offset
  const [{ offset }, api] = useSpring(() => ({
    offset: [0, 0],
    config: { mass: 1, tension: 120, friction: 10 },
  }))

  const bind = useDrag(
    ({ offset: [x, y], down }) => {
      if (down) {
        api.start({ offset: [x / aspect, -y / aspect] })
      } else {
        api.start({ offset: [0, 0] })
      }
    },
    { pointerEvents: true }
  )

  // Flying state toggle (optional pause/fly behavior) - reduced frequency
  const [isFlying, setIsFlying] = useState(true)
  const [showSpeechBubble, setShowSpeechBubble] = useState(false)
  const [messageIndex, setMessageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => setIsFlying((f) => !f), 16000) // Total cycle 16s: Fly 6s, stay 10s
    return () => clearInterval(interval)
  }, [])

  // Show speech bubble when robot stops flying
  useEffect(() => {
    if (!isFlying) {
      const timer = setTimeout(() => {
        setShowSpeechBubble(true)
        // Cycle to next message
        setMessageIndex(prev => (prev + 1) % messages.length)
      }, 3000) // Show after 3 seconds of stopping
      return () => clearTimeout(timer)
    } else {
      setShowSpeechBubble(false)
    }
  }, [isFlying])

  const flyingStartTimeRef = useRef(0)

  useFrame(({ clock }) => {
    if (!meshRef.current) return

    if (isFlying) {
      if (flyingStartTimeRef.current === 0) flyingStartTimeRef.current = clock.getElapsedTime()
      const elapsed = clock.getElapsedTime() - flyingStartTimeRef.current
      // Normalize t from 0 to 1 over lapDuration
      const t = (elapsed % lapDuration) / lapDuration

      // Position on curve
      const point = curve.getPointAt(t)
      const tangent = curve.getTangentAt(t)

      // Drag offset (XY plane offset)
      const [offsetX, offsetY] = offset.get()

      meshRef.current.position.set(point.x + offsetX, point.y + offsetY, point.z)

      // Face forward along the tangent of path (rotate around Y axis)
      // Face forward along the tangent of path (rotate around Y axis)
      const angle = Math.atan2(tangent.z, tangent.x)

      // Forward tilt angle in radians (negative to lean forward)
      const tiltForward = -0.4 // ~8.6 degrees

      // Smoothly apply tilt on X and heading on Y - reduced lerp for better performance
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, tiltForward, 0.05)
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, -angle + Math.PI / 2, 0.05)

    } else {
      flyingStartTimeRef.current = 0
      // Stay put + drag offset
      const [offsetX, offsetY] = offset.get()
      const pos = meshRef.current.position
      meshRef.current.position.set(pos.x + offsetX, pos.y + offsetY, pos.z)
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, 0, 0.05)
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, 0, 0.05)

    }
  })

  const currentMessage = messages[messageIndex]

  return (
    <a.group
      {...bind()}
      ref={meshRef}
      scale={scale}
      rotation={[0, 0, 0]}
      {...props}
    >
      <Float
        speed={3}
        rotationIntensity={0.3}
        floatIntensity={2.5}
        floatingRange={[0.2, 0.6]}
      >
        <Model />
      </Float>

      {/* Speech Bubble */}
      {showSpeechBubble && !isFlying && (
        <Html
          position={[7.5, 2.8, 0]}
          center
          distanceFactor={4}
          occlude
          transform
          sprite
        >
          <div className="speech-bubble-container">
            <div className="speech-bubble">
              <div className="speech-content">
                <p className="speech-text">{currentMessage}</p>
              </div>
              <div className="speech-arrow"></div>
            </div>
          </div>

          <style jsx>{`
            .speech-bubble-container {
              pointer-events: auto;
              z-index: 1000;
            }

            .speech-bubble {
              position: relative;
              background: linear-gradient(135deg, #212A31 0%, #2E3944 100%);
              border: 2px solid #748D92;
              border-radius: 16px;
              padding: 16px;
              box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
              animation: bubbleAppear 1.2s ease-out;
              max-width: 280px;
              font-family: 'Comic Sans MS', 'Comic Neue', cursive;
              font-size: 13px;
              line-height: 1.4;
            }

            .speech-content {
              display: flex;
              flex-direction: column;
            }

            .speech-text {
              color: #D3D9D4;
              font-size: 13px;
              font-weight: 600;
              margin: 0;
              text-align: center;
              font-family: 'Comic Sans MS', 'Comic Neue', cursive;
              line-height: 1.4;
            }

            .speech-arrow {
              position: absolute;
              left: -8px;
              top: 50%;
              transform: translateY(-50%);
              width: 0;
              height: 0;
              border-top: 8px solid transparent;
              border-bottom: 8px solid transparent;
              border-right: 8px solid #212A31;
              filter: drop-shadow(2px 0 4px rgba(0, 0, 0, 0.2));
            }

            .speech-arrow::before {
              content: '';
              position: absolute;
              top: -8px;
              left: -10px;
              width: 0;
              height: 0;
              border-top: 8px solid transparent;
              border-bottom: 8px solid transparent;
              border-right: 8px solid #748D92;
            }

            @keyframes bubbleAppear {
              0% {
                opacity: 0;
                transform: scale(0.7) translateY(30px);
              }
              50% {
                opacity: 0.7;
                transform: scale(0.85) translateY(10px);
              }
              100% {
                opacity: 1;
                transform: scale(1) translateY(0);
              }
            }
          `}</style>
        </Html>
      )}
    </a.group>
  )
}
