import type { FC } from 'react';
import type { SectionProps } from '../../types/index';
import ImgEle from '../common/elements/ImgEle';
import TextEle from '../common/elements/TextEle';
import SectionWrapper from '../common/SectionWrapper';
import { cn, getCommonElementClasses } from '../../utils';

const WavifyLogos: FC<SectionProps> = ({ section }) => {
  const commonElementClasses = getCommonElementClasses();

  return (
    <SectionWrapper section={section} containerClasses="text-center">
      <h2>
        <TextEle
          type="title"
          content={section.data.title}
          animation={section.data.titleAnimation}
          classes={cn(
            commonElementClasses.h2,
            commonElementClasses.headingHighlighted,
            section.data.titleClasses
          )}
        />
      </h2>
      <TextEle
        type="text"
        content={section.data.text}
        animation={section.data.textAnimation}
        classes={cn(
          'mx-auto max-w-5xl',
          commonElementClasses.text,
          section.data.textClasses
        )}
      />

      <div className="flex flex-wrap items-center justify-center gap-4">
        {section.data.imgs.map((item, index) => (
          <div
            key={index}
            className={cn(
              'p-4 grayscale transition duration-200 hover:grayscale-0'
            )}
          >
            <ImgEle
              img={item.img}
              imgClasses={cn(
                'sm:20 h-auto w-16 lg:w-36',
                section.data.imgsClasses,
                item.imgClasses
              )}
              imgBackgrounds={item.imgBackgrounds}
              animation={item.imgAnimation}
            />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default WavifyLogos;
