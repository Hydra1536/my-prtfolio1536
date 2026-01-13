import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface Sphere {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
}

const spheres: Sphere[] = [
  { id: 1, x: 10, y: 20, size: 300, color: "from-primary/40 to-primary/10", delay: 0 },
  { id: 2, x: 80, y: 60, size: 250, color: "from-secondary/40 to-secondary/10", delay: 0.5 },
  { id: 3, x: 60, y: 10, size: 200, color: "from-accent/30 to-accent/5", delay: 1 },
  { id: 4, x: 20, y: 70, size: 280, color: "from-secondary/30 to-primary/10", delay: 1.5 },
  { id: 5, x: 90, y: 30, size: 220, color: "from-primary/30 to-accent/10", delay: 2 },
  { id: 6, x: 40, y: 85, size: 180, color: "from-accent/40 to-secondary/10", delay: 2.5 },
];

const FloatingSpheres = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 50, stiffness: 100 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      mouseX.set(x);
      mouseY.set(y);
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {spheres.map((sphere) => (
        <motion.div
          key={sphere.id}
          className={`absolute rounded-full bg-gradient-radial ${sphere.color} blur-3xl`}
          style={{
            left: `${sphere.x}%`,
            top: `${sphere.y}%`,
            width: sphere.size,
            height: sphere.size,
            x: springX,
            y: springY,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
          }}
          transition={{
            duration: 1.5,
            delay: sphere.delay,
            ease: "easeOut",
          }}
        >
          <motion.div
            className="w-full h-full rounded-full"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6 + sphere.id,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingSpheres;
