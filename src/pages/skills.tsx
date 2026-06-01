import { motion } from 'framer-motion'
import TechStack from '../sections/TechStack'

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5 }}
      className="py-12"
    >
      <TechStack />
    </motion.div>
  )
}
