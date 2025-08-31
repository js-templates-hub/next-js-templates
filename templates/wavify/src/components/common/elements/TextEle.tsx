import type { FC } from 'react';
import { motion } from 'motion/react';
import DOMPurify from 'isomorphic-dompurify';
import type { IGenericTextElement } from '../../../types';
import { cn, getAnimation } from '../../../utils';

const TextEle: FC<IGenericTextElement> = (props) => {
  const textItemContent = props.content;
  const isHtml =
    (textItemContent && textItemContent?.includes('<span')) ||
    props.type === 'text' ||
    props.type === 'desc';

  const animation = getAnimation(props.animation);
  const Component = animation.enabled ? motion.div : 'div';

  if (isHtml) {
    return (
      <Component
        {...animation.details}
        className={cn('prose lg:prose-xl', props.classes)}
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(textItemContent || ''),
        }}
      />
    );
  }

  return (
    <Component {...animation.details} className={props.classes}>
      {textItemContent}
    </Component>
  );
};

export default TextEle;
