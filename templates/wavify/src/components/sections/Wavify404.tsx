import { FC } from 'react';
import { SectionProps } from '../../types';
import ImgEle from '../common/elements/ImgEle';
import TextEle from '../common/elements/TextEle';
import ButtonEle from '../common/elements/ButtonEle';
import SectionWrapper from '../common/SectionWrapper';
import { getCommonElementClasses, cn } from '../../utils';

const Wavify404: FC<SectionProps> = ({ section }) => {
  const commonElementClasses = getCommonElementClasses();

  return (
    <SectionWrapper section={section} containerClasses="text-center h-screen">
      <div className="flex size-full flex-col items-center justify-center">
        <ImgEle
          img={section.data.img}
          animation={section.data.imgAnimation}
          containerClasses="w-full max-w-sm lg:max-w-2xl"
          imgClasses={cn('mx-auto mb-10 object-cover', section.data.imgClasses)}
          imgBackgrounds={section.data.imgBackgrounds}
        />
        <h1>
          <TextEle
            type="title"
            content={section.data.title}
            animation={section.data.titleAnimation}
            classes={cn(
              commonElementClasses.h1,
              commonElementClasses.headingHighlighted,
              section.data.titleClasses
            )}
          />
        </h1>
        <TextEle
          type="text"
          content={section.data.text}
          animation={section.data.textAnimation}
          classes={cn(commonElementClasses.text, section.data.textClasses)}
        />
        <div className="flex w-full items-center justify-center gap-4">
          {(section.data.items || []).map((item, idx) => (
            <ButtonEle
              key={idx}
              button={item.button}
              buttonClasses={cn(
                section.data.itemsClasses,
                item.button.type === 'button'
                  ? commonElementClasses.button
                  : commonElementClasses.link,
                item.buttonClasses
              )}
              animation={section.data.buttonAnimation}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Wavify404;
