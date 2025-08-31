import type { FC } from 'react';
import type { IGenericElement } from '../../types/index';
import { cn } from '../../utils';
import ImgEle from './elements/ImgEle';
import TextEle from './elements/TextEle';

const Logo: FC<{ data: IGenericElement }> = ({ data }) => {
  return (
    <div className="flex items-center">
      {data.img && data.img.src && (
        <div className="m-1">
          <ImgEle
            img={data.img}
            imgClasses={cn('w-[40px]', data.imgClasses)}
            imgBackgrounds={data.imgBackgrounds}
            animation={data.imgAnimation}
          />
        </div>
      )}
      <div className="relative inline-block px-2 font-semibold">
        <TextEle
          type="title"
          content={data.title}
          classes={cn('relative inline-block px-2 font-semibold')}
          animation={data.titleAnimation}
        />
      </div>
    </div>
  );
};

export default Logo;
