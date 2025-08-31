import type { FC } from 'react';
import { useState } from 'react';
import type { SectionProps } from '../../types/index';
import Logo from '../common/Logo';
import { ModeToggle } from '../common/ModeToggle';
import ButtonEle from '../common/elements/ButtonEle';
import SectionWrapper from '../common/SectionWrapper';
import { cn, getCommonElementClasses } from '../../utils';

const WavifyNavbar: FC<SectionProps> = ({ section }) => {
  const commonElementClasses = getCommonElementClasses();

  const [state, setState] = useState(false);

  return (
    <SectionWrapper section={section}>
      <div className="mx-auto px-2">
        <div className="relative flex w-full items-center justify-between gap-6 md:gap-0">
          <div className="relative flex justify-between md:px-0">
            <Logo data={section.data} />
          </div>
          <div className="flex gap-4">
            <button
              className="outline-hidden lg:hidden"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>

            <ul
              className={`absolute top-4 right-1 mt-12 w-64 flex-1 p-2 lg:static lg:mt-0 lg:block lg:w-auto ${
                state
                  ? 'text-secondary-50 overflow-y-scroll rounded-md bg-neutral-900 shadow-md lg:rounded-[inherit] lg:bg-inherit lg:text-inherit lg:shadow-none'
                  : 'hidden'
              }`}
            >
              <li className="order-1 flex flex-col items-center justify-end space-y-1 lg:flex lg:flex-row lg:space-y-0 lg:space-x-6">
                {(section.data.items || []).map(
                  (item, idx) =>
                    item.button && (
                      <ButtonEle
                        key={idx}
                        button={item.button}
                        buttonClasses={cn(
                          item.button.type === 'button'
                            ? [
                                'w-full text-center md:w-auto',
                                commonElementClasses.button,
                              ]
                            : commonElementClasses.link,
                          section.data.itemsClasses,
                          item.buttonClasses
                        )}
                        animation={item.buttonAnimation}
                      />
                    )
                )}
              </li>
            </ul>
            <ModeToggle />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WavifyNavbar;
