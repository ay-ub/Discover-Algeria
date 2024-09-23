import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";
import { ReactLenis } from "lenis/react";
import images from "./assets/images";
function App() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-600%"]);
  return (
    <ReactLenis root>
      <section
        ref={targetRef}
        className='relative min-h-[1000vh] bg-neutral-900'
      >
        <div className='sticky top-0 flex h-screen items-center overflow-hidden'>
          <motion.div style={{ x }} className='flex items-center gap-10'>
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={index}
                loading='lazy'
                className='h-[calc(100vh-200px)] object-cover rounded-3xl
              '
              />
            ))}
          </motion.div>
        </div>
      </section>
    </ReactLenis>
  );
}

export default App;
