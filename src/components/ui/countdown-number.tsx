"use client"

import React, { useEffect, useState } from "react"
import NumberFlow from "@number-flow/react"
import { motion } from "framer-motion"

const MotionNumberFlow = motion(NumberFlow)

interface CountdownProps {
  endDate: Date
  startDate?: Date
  className?: string
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function AnimatedNumberCountdown({
  endDate,
  startDate,
  className,
}: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const start = startDate ? new Date(startDate) : new Date()
      const end = new Date(endDate)
      const difference = end.getTime() - start.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((difference / 1000 / 60) % 60)
        const seconds = Math.floor((difference / 1000) % 60)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [endDate, startDate])

  return (
    <div className={`flex items-center justify-center gap-3 text-white ${className}`}>
      <div className="flex flex-col items-center">
        <MotionNumberFlow
          value={timeLeft.days}
          className="text-3xl md:text-4xl font-semibold tracking-tighter"
          format={{ minimumIntegerDigits: 2 }}
        />
        <span className="text-xs text-white/70 font-light">Days</span>
      </div>
      <div className="text-2xl md:text-3xl font-bold text-white/50">:</div>
      <div className="flex flex-col items-center">
        <MotionNumberFlow
          value={timeLeft.hours}
          className="text-3xl md:text-4xl font-semibold tracking-tighter"
          format={{ minimumIntegerDigits: 2 }}
        />
        <span className="text-xs text-white/70 font-light">Hours</span>
      </div>
      <div className="text-2xl md:text-3xl font-bold text-white/50">:</div>
      <div className="flex flex-col items-center">
        <MotionNumberFlow
          value={timeLeft.minutes}
          className="text-3xl md:text-4xl font-semibold tracking-tighter"
          format={{ minimumIntegerDigits: 2 }}
        />
        <span className="text-xs text-white/70 font-light">Minutes</span>
      </div>
      <div className="text-2xl md:text-3xl font-bold text-white/50">:</div>
      <div className="flex flex-col items-center">
        <MotionNumberFlow
          value={timeLeft.seconds}
          className="text-3xl md:text-4xl font-semibold tracking-tighter"
          format={{ minimumIntegerDigits: 2 }}
        />
        <span className="text-xs text-white/70 font-light">Seconds</span>
      </div>
    </div>
  )
}
