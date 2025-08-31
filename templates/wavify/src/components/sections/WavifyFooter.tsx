import type { FC } from 'react';
import type { SectionProps } from '../../types/index';
import { cn } from '../../utils';
import Logo from '../common/Logo';
import ImgEle from '../common/elements/ImgEle';
import TextEle from '../common/elements/TextEle';
import SectionWrapper from '../common/SectionWrapper';

const WavifyFooter: FC<SectionProps> = ({ section }) => {
  return (
    <SectionWrapper section={section}>
      <div className="relative">
        <nav className="flex h-full w-full flex-col items-center justify-between px-4 sm:justify-between md:flex-row">
          <div className="flex flex-col items-center gap-2 md:flex-row">
            <span className="xs:mt-10 text-primary-500 relative flex h-14 items-center leading-none font-black sm:mt-0">
              <Logo data={section.data} />
            </span>
            <TextEle
              type="label"
              content={section.data.label}
              animation={section.data.labelAnimation}
              classes={cn('grayscale', section.data.labelClasses)}
            ></TextEle>
          </div>

          <div className="my-4 flex items-center gap-2">
            {section.data.imgs.map((item, idx) => (
              <ImgEle
                key={idx}
                img={item.img}
                imgClasses={cn(
                  'h-8 w-8 cursor-pointer grayscale transition duration-200 hover:grayscale-0',
                  section.data.imgsClasses,
                  item.imgClasses
                )}
                imgBackgrounds={item.imgBackgrounds}
                animation={item.imgAnimation}
              ></ImgEle>
            ))}
          </div>
        </nav>
      </div>
    </SectionWrapper>
  );
};

export default WavifyFooter;
