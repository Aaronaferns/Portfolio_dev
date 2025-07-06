import { useRef, useState, useEffect, useMemo } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import { useDrag } from '@use-gesture/react'
import { useSpring, a } from '@react-spring/three'
import { Model } from './Animated Robot'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

export default function DraggableRobot({ scale = 0.15, ...props }) {
  const meshRef = useRef()
  const { size, viewport } = useThree()
  const aspect = size.width / viewport.width

  const center = new THREE.Vector3(0, 0, 0)
  const numPoints = 6
  const lapDuration = 10 // seconds for full lap

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

  // Flying state toggle (optional pause/fly behavior)
  const [isFlying, setIsFlying] = useState(true)
  useEffect(() => {
    const interval = setInterval(() => setIsFlying((f) => !f), 8000)
    return () => clearInterval(interval)
  }, [])

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

      // Smoothly apply tilt on X and heading on Y
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, tiltForward, 0.1)
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, -angle + Math.PI / 2, 0.1)

    } else {
      flyingStartTimeRef.current = 0
      // Stay put + drag offset
      const [offsetX, offsetY] = offset.get()
      const pos = meshRef.current.position
      meshRef.current.position.set(pos.x + offsetX, pos.y + offsetY, pos.z)
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, 0, 0.1)
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, 0, 0.1)

    }
  })

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
    </a.group>
  )
}
