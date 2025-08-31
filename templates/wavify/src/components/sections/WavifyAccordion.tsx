import type { FC } from 'react';
import type { SectionProps } from '../../types/index';
import TextEle from '../common/elements/TextEle';
import SectionWrapper from '../common/SectionWrapper';
import { cn, getCommonElementClasses } from '../../utils';

const WavifyAccordion: FC<SectionProps> = ({ section }) => {
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

      {section.data.items.map((item, idx) => (
        <div
          key={idx}
          className={cn('my-2 w-full text-left', section.data.itemsClasses)}
        >
          <label
            htmlFor={`accordion-${idx}`}
            className="relative flex flex-col rounded-md p-2 shadow-sm transition"
          >
            <input
              id={`accordion-${idx}`}
              className="peer hidden"
              type="checkbox"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-secondary-400 absolute top-4 right-0 mr-5 ml-auto size-8 transition peer-checked:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <div className="relative ml-4 cursor-pointer items-center py-4 pr-12 select-none">
              <h3>
                <TextEle
                  type="title"
                  content={item.title}
                  animation={item.titleAnimation}
                  classes={cn(
                    'text-xl font-semibold',
                    commonElementClasses.h3,
                    'my-0',
                    item.titleClasses
                  )}
                />
              </h3>
            </div>
            <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
              <div className="px-4 py-2">
                <TextEle
                  type="text"
                  content={item.text}
                  animation={item.textAnimation}
                  classes={cn(
                    commonElementClasses.text,
                    'my-0',
                    item.textClasses
                  )}
                />
              </div>
            </div>
          </label>
        </div>
      ))}
    </SectionWrapper>
  );
};

export default WavifyAccordion;
