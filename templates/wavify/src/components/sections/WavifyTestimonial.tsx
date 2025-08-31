import type { FC } from 'react';
import type { SectionProps } from '../../types/index';
import ImgEle from '../common/elements/ImgEle';
import TextEle from '../common/elements/TextEle';
import SectionWrapper from '../common/SectionWrapper';
import { cn, getCommonElementClasses } from '../../utils';

const WavifyTestimonial: FC<SectionProps> = ({ section }) => {
  const commonElementClasses = getCommonElementClasses();

  return (
    <SectionWrapper section={section} containerClasses="text-center">
      <h2>
        <TextEle
          type="title"
          content={section.data.title}
          animation={section.data.titleAnimation}
          classes={cn(
            'text-center',
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
          'text-center',
          commonElementClasses.text,
          section.data.textClasses
        )}
      />

      <div className="mt-8 grid w-full grid-cols-1 gap-x-2 gap-y-8 text-left md:grid-cols-2 lg:grid-cols-3">
        {section.data.items.map((item, idx) => (
          <div
            key={idx}
            className={cn(
              'relative mx-6 aspect-auto p-8 hover:rotate-2 hover:shadow-xl md:mx-4',
              section.data.itemsClasses
            )}
          >
            <span className="absolute right-5 bottom-5 rotate-180 p-3 text-7xl opacity-[0.04] dark:opacity-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M7.16 3.5C4.73 5.06 3.55 6.67 3.55 9.36c.16-.05.3-.05.44-.05c1.27 0 2.5.86 2.5 2.41c0 1.61-1.03 2.61-2.5 2.61c-1.9 0-2.99-1.52-2.99-4.25c0-3.8 1.75-6.53 5.02-8.42L7.16 3.5zm7 0c-2.43 1.56-3.61 3.17-3.61 5.86c.16-.05.3-.05.44-.05c1.27 0 2.5.86 2.5 2.41c0 1.61-1.03 2.61-2.5 2.61c-1.89 0-2.98-1.52-2.98-4.25c0-3.8 1.75-6.53 5.02-8.42l1.14 1.84h-.01z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <div className="flex items-center gap-4">
              <ImgEle
                img={item.img}
                imgClasses={cn(
                  'size-14 rounded-full',
                  commonElementClasses.img,
                  item.imgClasses
                )}
                imgBackgrounds={item.imgBackgrounds}
                width={100}
                height={100}
                animation={item.imgAnimation}
              />

              <div>
                <h6 className="text-lg font-medium">
                  <TextEle
                    type="title"
                    content={item.title}
                    animation={item.titleAnimation}
                    classes={cn('font-semibold', item.titleClasses)}
                  />
                </h6>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={cn(
                        'h-6 w-6',
                        i < parseInt(`${item.number}`)
                          ? `text-yellow-500 ${item.numberClasses}`
                          : 'text-gray-300'
                      )}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <TextEle
              type="text"
              content={item.text}
              animation={item.textAnimation}
              classes={cn(commonElementClasses.text, item.textClasses)}
            />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default WavifyTestimonial;
