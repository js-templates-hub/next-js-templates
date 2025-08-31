import { useEffect, useState } from 'react';
import type { SectionProps } from '../../types';
import ImgEle from '../common/elements/ImgEle';
import TextEle from '../common/elements/TextEle';
import SectionWrapper from '../common/SectionWrapper';
import { cn, getCommonElementClasses } from '../../utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '../ui/carousel';

const Feature3: React.FC<SectionProps> = ({ section }) => {
  const commonElementClasses = getCommonElementClasses();

  const [mainCarouselApi, setMainCarouselApi] = useState<CarouselApi | null>(
    null
  );
  const [thumbnailCarouselApi, setThumbnailCarouselApi] =
    useState<CarouselApi | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onThumbClick = (index: number) => {
    if (!mainCarouselApi) return;
    mainCarouselApi.scrollTo(index);
  };

  const onSelect = () => {
    if (!mainCarouselApi || !thumbnailCarouselApi) return;
    const selected = mainCarouselApi.selectedScrollSnap();
    setSelectedIndex(selected);
    thumbnailCarouselApi.scrollTo(selected);
  };

  useEffect(() => {
    if (!mainCarouselApi) return;
    onSelect();
    mainCarouselApi.on('select', onSelect);
    mainCarouselApi.on('reInit', onSelect);
  }, [mainCarouselApi]);

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

      <div className="relative mx-auto flex-col items-center justify-center gap-10 text-left md:mt-8">
        <div className="flex items-center justify-center">
          <div className="hidden w-[50px] lg:block">
            {`${selectedIndex + 1} / ${section.data.items.length}`}
          </div>

          <Carousel
            orientation="horizontal"
            className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,_transparent,_rgb(0,_0,_0)_2%,_black_80%,_transparent)] [mask-repeat:no-repeat] lg:[mask-image:linear-gradient(to_right,_transparent,_rgb(0,_0,_0)_2%,_black_80%,_transparent)]"
            setApi={setThumbnailCarouselApi}
          >
            <CarouselContent className="m-0 flex max-h-[550px] max-w-xs gap-1 p-0 md:max-w-md lg:w-full lg:max-w-full">
              {section.data.items.map((item: any, index: number) => (
                <CarouselItem
                  key={index}
                  className={cn(
                    'my-2 basis-1/2 cursor-pointer pl-0 lg:basis-1/3',
                    section.data.itemsClasses
                  )}
                  onClick={() => onThumbClick(index)}
                >
                  <div
                    className={cn(
                      'mx-1 flex flex-row gap-2',
                      index === selectedIndex ? '' : 'opacity-50'
                    )}
                  >
                    <div className="mx-1">
                      <TextEle
                        type="label"
                        content={item.label}
                        animation={item.labelAnimation}
                        classes={cn(
                          commonElementClasses.label,
                          'my-0 py-0',
                          item.labelClasses
                        )}
                      />
                    </div>
                    <div>
                      <TextEle
                        type="title"
                        content={item.title}
                        animation={item.titleAnimation}
                        classes={cn(
                          commonElementClasses.h3,
                          'm-0 p-0',
                          item.titleClasses
                        )}
                      />
                      <TextEle
                        type="text"
                        content={item.text}
                        animation={item.textAnimation}
                        classes={cn(
                          commonElementClasses.text,
                          'm-0 text-xs lg:text-base',
                          section.data.textClasses
                        )}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <Carousel className="relative my-4 w-full" setApi={setMainCarouselApi}>
          <CarouselContent>
            {section.data.items.map((item: any, index: number) => (
              <CarouselItem
                key={index}
                className={cn(
                  'relative flex justify-center',
                  section.data.itemsClasses
                )}
              >
                <ImgEle
                  img={item.img}
                  animation={item.imgAnimation}
                  containerClasses="w-full"
                  imgClasses={cn(
                    'w-full [mask-image:linear-gradient(rgba(0,_0,_0,_1)_80%,_transparent)]',
                    item.imgClasses
                  )}
                  imgBackgrounds={item.imgBackgrounds}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </SectionWrapper>
  );
};

export default Feature3;
