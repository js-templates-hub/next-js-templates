import type { FC } from 'react';
import type { SectionProps } from '../../types/index';
import TextEle from '../common/elements/TextEle';
import SectionWrapper from '../common/SectionWrapper';
import { cn, getCommonElementClasses } from '../../utils';

const WavifyStats: FC<SectionProps> = ({ section }) => {
  const commonElementClasses = getCommonElementClasses();

  return (
    <SectionWrapper section={section}>
      <div className="flex flex-col items-center justify-between gap-16 px-10 py-10 lg:flex-row">
        <div className="w-full lg:w-1/2">
          <h2>
            <TextEle
              type="title"
              content={section.data.title}
              animation={section.data.titleAnimation}
              classes={cn(commonElementClasses.h2, section.data.titleClasses)}
            />
          </h2>
          <TextEle
            type="text"
            content={section.data.text}
            animation={section.data.textAnimation}
            classes={cn(commonElementClasses.text, section.data.textClasses)}
          />
        </div>
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            {section.data.items.map((item, idx) => (
              <div
                key={idx}
                className={cn('flex flex-col p-4', section.data.itemsClasses)}
              >
                <TextEle
                  type="title"
                  content={`${item.number}${item.label}`}
                  animation={item.textAnimation}
                  classes={cn(
                    commonElementClasses.h2,
                    commonElementClasses.textEffect,
                    'my-1',
                    item.numberClasses
                  )}
                />
                <TextEle
                  type="text"
                  content={item.text}
                  animation={item.textAnimation}
                  classes={cn(
                    commonElementClasses.text,
                    'my-1',
                    item.textClasses
                  )}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WavifyStats;
