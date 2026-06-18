import { useState } from 'react'
import { motion } from 'motion/react'
import { gallery } from '../../data/gallery.js'
import { asset } from '../../lib/asset.js'

// Collage positions / rotations. The 3rd image (index 2) is the centre piece;
// the others surround and slightly overlap it. Percentages are relative to the
// container box. Cycles if there are more images than entries.
const layout = [
  { top: '6%', left: '18%', w: 'w-44 sm:w-48', rotate: -7 }, // top
  { top: '14%', left: '52%', w: 'w-44 sm:w-48', rotate: 6 }, // top-right
  { top: '30%', left: '26%', w: 'w-48 sm:w-56', rotate: -2 }, // CENTRE (gallery-3)
  { top: '62%', left: '12%', w: 'w-44 sm:w-48', rotate: 5 }, // bottom-left
  { top: '58%', left: '50%', w: 'w-44 sm:w-48', rotate: -8 }, // bottom-right
  { top: '34%', left: '-4%', w: 'w-40 sm:w-44', rotate: 7 }, // left
]

// How far (px) a photo can travel before the elastic pull starts bouncing back.
const RADIUS = 80

export default function HeroCollage() {
  // Index of the photo that's been clicked (enlarged + on top). Null = none.
  const [active, setActive] = useState(null)

  return (
    <div className="relative mx-auto h-[28rem] w-full max-w-md sm:h-[32rem]">
      {gallery.map((src, i) => {
        const cfg = layout[i % layout.length]
        const isActive = active === i
        return (
          <motion.div
            key={i}
            drag
            dragConstraints={{ top: -RADIUS, bottom: RADIUS, left: -RADIUS, right: RADIUS }}
            dragElastic={0.55}
            dragTransition={{ bounceStiffness: 320, bounceDamping: 18 }}
            onTap={() => setActive(isActive ? null : i)}
            whileHover={isActive ? undefined : { scale: 1.05, zIndex: 30 }}
            whileDrag={{ scale: isActive ? 2.1 : 1.08, zIndex: 50 }}
            initial={{ opacity: 0, scale: 0.8, rotate: cfg.rotate }}
            animate={{
              // When one is expanded, dim + shrink the others to focus it.
              opacity: active !== null && !isActive ? 0.35 : 1,
              scale: isActive ? 2.1 : active !== null ? 0.95 : 1,
              rotate: isActive ? 0 : cfg.rotate,
              zIndex: isActive ? 50 : i === 2 ? 10 : 1,
            }}
            transition={{
              opacity: { delay: active === null ? 0.3 + i * 0.1 : 0, duration: 0.4 },
              scale: { type: 'spring', stiffness: 280, damping: 20 },
              rotate: { type: 'spring', stiffness: 200, damping: 18 },
              default: { duration: 0.3 },
            }}
            style={{ top: cfg.top, left: cfg.left }}
            className={`absolute ${cfg.w} cursor-grab touch-none overflow-hidden rounded-2xl border-4 border-white bg-white active:cursor-grabbing ${
              isActive ? 'shadow-2xl ring-2 ring-white' : 'shadow-xl'
            }`}
          >
            <img
              src={asset(src)}
              alt=""
              aria-hidden="true"
              draggable={false}
              className="pointer-events-none aspect-[4/3] w-full object-cover"
            />
          </motion.div>
        )
      })}
    </div>
  )
}
