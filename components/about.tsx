"use client"

import SectionHeading from './section-heading'

import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'

export default function About() {
  const { ref } = useSectionInView("About")

  return (
    <motion.section ref={ref} id='about' className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28" initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{delay: 0.3}}>
        <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I am a <span className="font-bold">Freelance Full-Stack Developer</span> based in India. I started programming in 2020, driven by curiosity about how tech works. Initially focused on modifying mobile apps, I soon became interested in web development, learning through platforms like <span className="font-bold underline"><a href="https://w3schools.com" target='_blank'>W3Schools</a></span> and <span className="font-bold underline"><a href='https://sololearn.com' target="_blank">Sololearn</a></span>. Today, I build both mobile and web applications for clients.
      </p>

    </motion.section>
  )
}
