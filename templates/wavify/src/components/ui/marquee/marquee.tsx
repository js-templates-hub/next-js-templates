import { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/utils';
import './marquee.css';

interface MarqueeProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * Optional CSS class name to apply custom styles
   */
  className?: string;
  /**
   * Whether to reverse the animation direction
   * @default false
   */
  reverse?: boolean;
  /**
   * Whether to pause the animation on hover
   * @default false
   */
  pauseOnHover?: boolean;
  /**
   * Content to be displayed in the marquee
   */
  children: React.ReactNode;
  /**
   * Whether to animate vertically instead of horizontally
   * @default false
   */
  vertical?: boolean;
  /**
   * Number of times to repeat the content
   * @default 4
   */
  repeat?: number;
}

export function Marquee({
  children,
  className,
  pauseOnHover = false,
  repeat = 4,
  reverse = false,
  vertical = false,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        'group flex [gap:var(--gap)] overflow-hidden p-2 [--duration:40s] [--gap:1rem]',
        {
          'flex-col': vertical,
          'flex-row': !vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            style={{ animationDirection: reverse ? 'reverse' : 'normal' }}
            className={cn('flex shrink-0 justify-around [gap:var(--gap)]', {
              'animate-marquee-vertical flex-col': vertical,
              'animate-marquee flex-row': !vertical,
              'group-hover:[animation-play-state:paused]': pauseOnHover,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
