import type { FC } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import type { LinkElement } from '../../../types';
import { getAnimation } from '../../../utils';

const LinkEle: FC<LinkElement> = (props) => {
  const animation = getAnimation(props.animation);
  const Component = animation.enabled ? motion.create(Link) : Link;

  return (
    <Component
      {...(animation.enabled ? animation.details : {})}
      className={`cursor-pointer ${props.linkClasses}`}
      target={props.link.newTab ? '_blank' : '_self'}
      href={props.link.href || null}
    >
      {props.link.label}
    </Component>
  );
};

export default LinkEle;
