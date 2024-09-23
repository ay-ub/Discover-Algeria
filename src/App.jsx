import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";
import { ReactLenis } from "lenis/react";
import images from "./assets/images";
import footer from "./assets/footer.svg";
import bar from "./assets/progress-bar.svg";
function App() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-550%"]);
  return (
    <ReactLenis root>
      <section
        ref={targetRef}
        className='relative min-h-[1000vh] bg-neutral-900'
      >
        <div className='sticky top-0 flex h-screen items-center overflow-hidden'>
          <motion.div style={{ x }} className='flex items-center gap-10'>
            {images.map((img, index) => (
              <motion.img
                initial={{ scale: 0.9, filter: "blur(10px)" }}
                whileInView={{
                  scale: 1,
                  filter: "blur(0px)",
                  transition: { duration: 0.5 },
                }}
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
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
          className='fixed bottom-0 w-full flex flex-col '
        >
          <img src={bar} alt='progress-bar' className='w-full' />
          <img src={footer} alt='footer' className='w-full' />
        </motion.div>
      </section>
    </ReactLenis>
  );
}

export default App;
