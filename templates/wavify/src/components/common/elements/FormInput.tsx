import { motion } from 'motion/react';
import React, { useState } from 'react';
import ButtonEle from './ButtonEle';
import { cn, getAnimation } from '../../../utils';
import { FormInput, Animation } from '../../../types';

type Props = {
  idx: number;
  model: FormInput;
  inputContainerClasses?: string;
  inputLabelClasses?: string;
  inputClasses?: string;
  animation?: Animation;
};

const FormInputItem: React.FC<Props> = (props) => {
  const [inputModel, setInputModel] = useState(props.model);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInputModel({ ...inputModel, value: e.target.value });
  };

  const animation = getAnimation(props.animation);
  const Component = animation.enabled ? motion.div : 'div';

  if (['submit', 'reset'].includes(inputModel.type)) {
    return (
      <Component {...animation.details} className={props.inputContainerClasses}>
        <ButtonEle
          button={{
            href: '',
            label: inputModel.label ?? '',
            type: inputModel.type,
          }}
          buttonClasses={cn('w-full cursor-pointer', props.inputClasses)}
        />
      </Component>
    );
  }

  return (
    <Component
      {...(animation.enabled ? animation.details : {})}
      className={props.inputContainerClasses}
    >
      {inputModel.label && (
        <label
          htmlFor={`${inputModel.label}-${props.idx}`}
          className={props.inputLabelClasses}
          dangerouslySetInnerHTML={{ __html: inputModel.label }}
        ></label>
      )}

      {inputModel.type === 'textarea' ? (
        <textarea
          id={`${inputModel.label}-${props.idx}`}
          {...inputModel}
          className={props.inputClasses}
          onChange={handleChange}
        />
      ) : (
        <input
          id={`${inputModel.label}-${props.idx}`}
          {...inputModel}
          className={props.inputClasses}
          onChange={handleChange}
        />
      )}
    </Component>
  );
};

export default FormInputItem;
