import { motion } from 'framer-motion'
import FeaturedProjects from '../sections/FeaturedProjects'

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5 }}
      className="py-12"
    >
      <FeaturedProjects />
    </motion.div>
  )
}
