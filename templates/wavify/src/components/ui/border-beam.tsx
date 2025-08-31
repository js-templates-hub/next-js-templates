'use client';

import { motion, MotionStyle, Transition } from 'motion/react';
import { cn } from '@/utils';

interface BorderBeamProps {
  /**
   * The size of the border beam.
   */
  size?: number;
  /**
   * The duration of the border beam.
   */
  duration?: number;
  /**
   * The delay of the border beam.
   */
  delay?: number;
  /**
   * The color of the border beam from.
   */
  colorFrom?: string;
  /**
   * The color of the border beam to.
   */
  colorTo?: string;
  /**
   * The motion transition of the border beam.
   */
  transition?: Transition;
  /**
   * The class name of the border beam.
   */
  className?: string;
  /**
   * The style of the border beam.
   */
  style?: React.CSSProperties;
  /**
   * Whether to reverse the animation direction.
   */
  reverse?: boolean;
  /**
   * The initial offset position (0-100).
   */
  borderWidth?: number;

  initialOffset?: number;
}

export const BorderBeam = ({
  borderWidth = 1.5,
  className,
  colorFrom = '#eee',
  colorTo = '#000',
  delay = 0,
  duration = 6,
  initialOffset = 0,
  reverse = false,
  size = 50,
  style,
  transition,
}: BorderBeamProps) => {
  return (
    <div
      style={
        {
          '--border-width': borderWidth,
        } as any
      }
      className="pointer-events-none absolute inset-0 rounded-[inherit] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)] [mask-composite:intersect] [mask-clip:padding-box,border-box] [border:calc(var(--border-width)*1px)_solid_transparent]"
    >
      <motion.div
        className={cn(
          'absolute aspect-square',
          'bg-gradient-to-l from-[var(--color-from)] via-[var(--color-to)] to-transparent',
          className
        )}
        style={
          {
            '--color-from': colorFrom,
            '--color-to': colorTo,
            offsetPath: `rect(0 auto auto 0 round ${size}px)`,
            width: size,

            ...style,
          } as MotionStyle
        }
        initial={{ offsetDistance: `${initialOffset}%` }}
        animate={{
          offsetDistance: reverse
            ? [`${100 - initialOffset}%`, `${-initialOffset}%`]
            : [`${initialOffset}%`, `${100 + initialOffset}%`],
        }}
        transition={{
          delay: -delay,
          duration,
          ease: 'linear',
          repeat: Infinity,
          ...transition,
        }}
      />
    </div>
  );
};
