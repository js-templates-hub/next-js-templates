import { FC } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { cn, getAnimation } from '../../../utils';
import { Animation, ImgItem } from '../../../types';

type ImageProps = {
  img: ImgItem;
  imgClasses?: string;
  containerClasses?: string;
  imgBackgrounds?: any[];
  width?: number | string;
  height?: number | string;
  animation?: Animation;
  isBackgroundImg?: boolean;
};

const ImageEle: FC<ImageProps> = (props) => {
  if (!props.img?.src) return null;

  const isSvgInline = props.img.src.trim().startsWith('<svg');

  const animation = getAnimation(props.animation);
  const divWrapper = animation.enabled ? motion.div : 'div';
  const LinkWrapper = animation.enabled ? motion.create(Link) : Link;
  const Component = props.img?.href ? LinkWrapper : divWrapper;

  const SvgElement = () => (
    <div
      className={props.imgClasses}
      dangerouslySetInnerHTML={{ __html: props.img.src }}
      aria-hidden="true"
    />
  );

  const ImgElement = () => {
    return props.isBackgroundImg ? (
      <div
        style={{ backgroundImage: `url(${props.img.src})` }}
        className={cn('bg-no-repeat', props.imgClasses)}
      />
    ) : (
      <img
        src={props.img.src}
        alt={props.img.alt || ''}
        className={props.imgClasses}
        width={props.width || '100%'}
        height={props.height || '100%'}
        loading="lazy"
      />
    );
  };

  return (
    <Component
      {...animation.details}
      href={props.img.href || null}
      target={props.img.newTab ? '_blank' : '_self'}
      className={cn('relative', props.containerClasses)}
    >
      {isSvgInline ? <SvgElement /> : <ImgElement />}
    </Component>
  );
};

export default ImageEle;
