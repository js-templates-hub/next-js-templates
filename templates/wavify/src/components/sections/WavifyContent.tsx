import type { FC } from 'react';
import type { SectionProps } from '../../types';
import ImgEle from '../common/elements/ImgEle';
import TextEle from '../common/elements/TextEle';
import SectionWrapper from '../common/SectionWrapper';
import { cn, getCommonElementClasses } from '../../utils';

const WavifyFeature: FC<SectionProps> = ({ section }) => {
  const commonElementClasses = getCommonElementClasses();

  return (
    <SectionWrapper section={section} containerClasses="text-center space-16">
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

      {section.data.items.map((item, idx) => (
        <div
          key={idx}
          className="my-8 grid items-center gap-2 md:grid-cols-2 md:gap-10 md:text-left"
        >
          <div className={cn('space-y-4', idx % 2 === 0 ? 'md:order-2' : '')}>
            <h3>
              <TextEle
                type="title"
                content={item.title}
                animation={item.titleAnimation}
                classes={cn(commonElementClasses.h3, item.titleClasses)}
              />
            </h3>
            <TextEle
              type="text"
              content={item.text}
              animation={item.textAnimation}
              classes={cn(commonElementClasses.text, item.textClasses)}
            />
          </div>

          <div className="overflow-hidden [mask-image:linear-gradient(to_bottom,_transparent,_rgb(0,_0,_0)_20%,_black_80%,_transparent)] [mask-repeat:no-repeat]">
            <ImgEle
              img={item.img}
              imgClasses={cn(
                'w-full rounded-xl',
                section.data.imgsClasses,
                item.imgClasses
              )}
              imgBackgrounds={item.imgBackgrounds}
              animation={item.imgAnimation}
            />
          </div>
        </div>
      ))}
    </SectionWrapper>
  );
};

export default WavifyFeature;
