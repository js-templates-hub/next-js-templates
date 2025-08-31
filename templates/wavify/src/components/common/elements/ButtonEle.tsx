import type { FC } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import type { ButtonElement } from '../../../types';
import LinkEle from './LinkEle';
import { getAnimation } from '../../../utils';

const ButtonEle: FC<ButtonElement> = (props) => {
  const animation = getAnimation(props.animation);
  const Component = animation.enabled ? motion.create(Link) : Link;
  const Btn = animation.enabled ? motion.button : 'button';
  const BtnComponent = props?.button?.href ? Component : Btn;

  const renderButton = () => (
    <BtnComponent
      {...(animation.enabled ? animation.details : {})}
      type={props.button.type}
      className={`inline-block cursor-pointer ${props.buttonClasses}`}
      href={props.button.href || null}
      target={props.button.newTab ? '_blank' : '_self'}
    >
      <span>{props.button.label}</span>
      {props.children}
    </BtnComponent>
  );

  if (props.button?.type === 'link')
    return (
      <LinkEle
        animation={props.animation}
        linkClasses={props.buttonClasses}
        link={props.button}
      />
    );

  if (props.button?.label) return renderButton();
};

export default ButtonEle;
