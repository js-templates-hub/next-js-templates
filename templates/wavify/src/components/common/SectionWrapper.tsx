import type { FC } from 'react';
import { motion } from 'motion/react';
import type { SectionWrapperProps } from '../../types';
import { cn, getAnimation } from '../../utils';
import RenderBackgrounds from './RenderBackgrounds';

const SectionWrapper: FC<SectionWrapperProps> = (props) => {
  const animation = getAnimation(props.section.animation);
  const Component = animation.enabled ? motion.section : 'section';

  return (
    <Component
      {...animation.details}
      id={props.section.id}
      className={cn(
        'relative',
        props.containerClasses,
        props.section.containerClasses
      )}
    >
      <div className="w-full overflow-hidden">
        <RenderBackgrounds backgrounds={props.section.backgrounds} />
      </div>
      {props.children}
    </Component>
  );
};

export default SectionWrapper;
