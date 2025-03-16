import { motion } from "framer-motion";

const fragmentVariants = {
  initial: (index) => ({
    opacity: 1,
    y: index % 2 === 0 ? "-100%" : "100%", // Alternating directions
    x: index < 2 ? "-100%" : "100%", // Left/right split
  }),
  in: { 
    opacity: 0, 
    x: 0, 
    y: 0, 
    transition: { duration: 1, ease: "easeOut" } 
  },
  out: (index) => ({ 
    opacity: 1, 
    y: index % 2 === 0 ? "-100%" : "100%", 
    x: index < 2 ? "-100%" : "100%",
    transition: { duration: 0.8, ease: "easeInOut" }
  }),
};

const PageTransition = ({ children }) => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Animated Fragments */}
      {[...Array(4)].map((_, index) => (
        <motion.div
          key={index}
          custom={index}
          initial="initial"
          animate="in"
          exit="out"
          variants={fragmentVariants}
          className="absolute w-1/2 h-1/2 bg-gray-900 z-10"
          style={{
            top: index < 2 ? "0%" : "50%",
            left: index % 2 === 0 ? "0%" : "50%",
          }}
        />
      ))}

      {/* Page Content (Keeps Image Visible) */}
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={{
          initial: { opacity: 0 },
          in: { opacity: 1, transition: { duration: 1 } },
          out: { opacity: 0, transition: { duration: 0.5 } },
        }}
        className="relative z-20"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default PageTransition;
