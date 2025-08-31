import type { FC } from 'react';
import { cn } from '../../utils';

const RenderBackgrounds: FC<Props> = (props) => {
  return (props.backgrounds || []).map(
    (classes: Record<string, string>, index: number) => {
      return (
        <div
          key={index}
          className={cn('absolute z-[-1] h-full w-full', classes)}
        ></div>
      );
    }
  );
};

export default RenderBackgrounds;

type Props = {
  backgrounds: any[];
};
