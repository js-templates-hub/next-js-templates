import type { FC } from 'react';
import { motion } from 'motion/react';
import type { NumberElement } from '../../../types';
import { getAnimation } from '../../../utils';

const NumberEle: FC<NumberElement> = (props) => {
  const animation = getAnimation(props.animation);
  const Component = animation.enabled ? motion.span : 'span';

  return (
    <Component {...animation.details} className={props.classes}>
      {props.content}
    </Component>
  );
};

export default NumberEle;
