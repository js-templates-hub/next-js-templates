import { useState } from 'react';
import { SectionProps } from '../../types';
import ImgEle from '../common/elements/ImgEle';
import { BorderBeam } from '../ui/border-beam';
import TextEle from '../common/elements/TextEle';
import ButtonEle from '../common/elements/ButtonEle';
import SectionWrapper from '../common/SectionWrapper';
import { cn, getCommonElementClasses } from '../../utils';

const WavifyHero: React.FC<SectionProps> = ({ section }) => {
  const commonElementClasses = getCommonElementClasses();
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <SectionWrapper section={section}>
      <div className="relative">
        <div className="relative flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="min-h-[3rem] lg:min-h-[4.5rem]" data-visible="true">
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
            classes={cn(
              'max-w-5xl',
              commonElementClasses.text,
              section.data.textClasses
            )}
          />

          <div className="mb-10 flex flex-wrap items-center justify-center gap-4">
            {section.data.items.map((item, index) => (
              <ButtonEle
                key={index}
                button={item.button}
                animation={item.buttonAnimation}
                buttonClasses={cn(
                  item.button.type === 'button'
                    ? `relative transform transition-transform duration-200 hover:scale-105 ${commonElementClasses.button}`
                    : commonElementClasses.link,
                  item.buttonClasses
                )}
              />
            ))}
          </div>

          <div
            className={cn(
              'relative w-full max-w-3xl overflow-hidden rounded-xl shadow-lg will-change-transform lg:max-w-5xl lg:rotate-2 lg:hover:rotate-0',
              section.data.videoClasses
            )}
          >
            <ImgEle
              img={section.data.video}
              animation={section.data.imgAnimation}
              containerClasses="w-full aspect-video"
              imgClasses="border-10 border-secondary-200/20 w-full object-cover"
            />
            <button
              onClick={toggleModal}
              className="bg-secondary-500/10 hover:bg-secondary-500/20 absolute inset-0 flex cursor-pointer items-center justify-center text-4xl text-white transition duration-300"
            >
              ▶
            </button>
            <BorderBeam
              className="absolute inset-0"
              colorFrom="var(--color-primary-500)"
              colorTo="var(--color-primary-400)"
              size={150}
              duration={24}
              delay={1}
              borderWidth={3}
            />
          </div>
        </div>

        {showModal && (
          <div className="bg-secondary-500/20 fixed inset-0 z-50 flex items-center justify-center px-4">
            <div className="relative aspect-video w-full max-w-5xl">
              <iframe
                src={`${section.data.video.videoSrc}?autoplay=1`}
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="h-full w-full rounded-lg"
              ></iframe>
              <button
                onClick={toggleModal}
                className="text-secondary-100 bg-secondary-500/50 hover:bg-secondary-500/80 absolute -top-16 right-2 size-12 cursor-pointer rounded-full text-2xl lg:-top-10 lg:-right-12"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
};

export default WavifyHero;
