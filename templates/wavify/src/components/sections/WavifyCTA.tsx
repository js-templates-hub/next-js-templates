import type { FC } from 'react';
import type { SectionProps } from '../../types/index';
import TextEle from '../common/elements/TextEle';
import ButtonEle from '../common/elements/ButtonEle';
import SectionWrapper from '../common/SectionWrapper';
import { cn, getCommonElementClasses } from '../../utils';

const WavifyCTA: FC<SectionProps> = ({ section }) => {
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
        classes={cn(commonElementClasses.text, section.data.textClasses)}
      />
      <div className="flex flex-wrap items-center justify-center gap-6">
        {(section.data.items || []).map(
          (item, idx) =>
            item.button && (
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
                animation={item.buttonAnimation}
              />
            )
        )}
      </div>
    </SectionWrapper>
  );
};

export default WavifyCTA;
