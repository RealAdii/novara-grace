'use client'
import { motion } from 'framer-motion'
import type { ComponentProps } from 'react'

export function MotionDiv(props: ComponentProps<typeof motion.div>) {
  return <motion.div {...props} />
}
