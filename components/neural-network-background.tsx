"use client"
import { useEffect, useRef } from "react"

interface Point {
  x: number
  y: number
  vx: number
  vy: number
}

export default function NeuralNetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const pointsRef = useRef<Point[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createPoints = () => {
      const points: Point[] = []
      const numPoints = Math.floor((canvas.width * canvas.height) / 15000) // Adjust density based on screen size

      for (let i = 0; i < numPoints; i++) {
        points.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5, // Random velocity between -0.25 and 0.25
          vy: (Math.random() - 0.5) * 0.5,
        })
      }
      pointsRef.current = points
    }

    const drawPoint = (point: Point) => {
      ctx.beginPath()
      ctx.arc(point.x, point.y, 2, 0, Math.PI * 2)
      ctx.fillStyle = "rgba(34, 197, 94, 0.8)" // Green color for points
      ctx.fill()
    }

    const drawLine = (point1: Point, point2: Point, distance: number) => {
      const opacity = Math.max(0, 1 - distance / 150) // Lines fade out with distance
      ctx.beginPath()
      ctx.moveTo(point1.x, point1.y)
      ctx.lineTo(point2.x, point2.y)
      ctx.strokeStyle = `rgba(34, 197, 94, ${opacity * 0.3})` // Green color for lines, lower opacity
      ctx.lineWidth = 1
      ctx.stroke()
    }

    const updatePoints = () => {
      pointsRef.current.forEach((point) => {
        point.x += point.vx
        point.y += point.vy

        // Reverse velocity if hitting canvas edges
        if (point.x < 0 || point.x > canvas.width) point.vx *= -1
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1

        // Ensure points stay within bounds after velocity reversal
        point.x = Math.max(0, Math.min(canvas.width, point.x))
        point.y = Math.max(0, Math.min(canvas.height, point.y))
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height) // Clear canvas for next frame

      updatePoints()

      // Draw connections between points that are close enough
      for (let i = 0; i < pointsRef.current.length; i++) {
        for (let j = i + 1; j < pointsRef.current.length; j++) {
          const point1 = pointsRef.current[i]
          const point2 = pointsRef.current[j]
          const distance = Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2))

          if (distance < 150) {
            drawLine(point1, point2, distance)
          }
        }
      }

      // Draw points
      pointsRef.current.forEach(drawPoint)

      animationRef.current = requestAnimationFrame(animate) // Loop animation
    }

    // Initial setup
    resizeCanvas()
    createPoints()
    animate()

    // Handle window resize
    const handleResize = () => {
      resizeCanvas()
      createPoints() // Recreate points on resize to maintain density
    }

    window.addEventListener("resize", handleResize)

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, []) // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: "transparent" }}
    />
  )
}
