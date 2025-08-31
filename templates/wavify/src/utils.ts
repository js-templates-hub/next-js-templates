import { clsx, ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import data from './data.json';
import { Form, PageId, Section, SectionId, Animation } from './types';
import axios from 'axios';
import { FormEvent } from 'react';

export const submitForm = async (
  event: FormEvent<HTMLFormElement>,
  form: Form
) => {
  if (!form.useSubmitFunc) return;

  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const formPayload = Object.fromEntries(formData.entries());

  if (process.env.NODE_ENV === 'development') {
    console.log('Form payload:', formPayload);
  }

  try {
    const response = await axios({
      method: form.method,
      url: form.action,
      data: formPayload,
    });

    if (process.env.NODE_ENV === 'development') {
      console.log('Response:', response);
    }
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error submitting form:', error);
    }
  }
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getSection(pageId: PageId, sectionId: SectionId | string) {
  const pages = data.pages;

  if (!pages[pageId]) {
    throw new Error(`invalid page id sent: ${pageId as string}`);
  }

  return pages[pageId]['sections'][
    sectionId as SectionId
  ] as unknown as Section;
}

export function getPage(pageId: PageId) {
  const pages = data.pages;

  if (!pages[pageId]) {
    throw new Error(`Invalid page id sent: ${pageId}`);
  }

  return pages[pageId];
}

export function getCommonElementClasses() {
  return data.metadata.styles.classes as Record<string, string>;
}

export function getAnimation(eleAnimation?: Animation) {
  const globalAnimation = data.metadata.styles
    .animation as unknown as Animation;

  let animation = globalAnimation?.effects;

  if (eleAnimation?.effects?.enabled === true) {
    animation = eleAnimation?.effects;
  }

  if (!animation?.enabled) {
    return {
      enabled: false,
      details: {},
    };
  }

  const animationDetails = {
    initial: {
      [animation.direction === 'left' || animation.direction === 'right'
        ? 'x'
        : 'y']:
        animation?.direction === 'right' || animation?.direction === 'down'
          ? -(animation?.offset || 0)
          : animation?.offset,
      opacity: 0,
      filter: `blur(20px)`,
    },
    whileInView: {
      opacity: 1,
      filter: `blur(0px)`,
      [animation?.direction === 'left' || animation?.direction === 'right'
        ? 'x'
        : 'y']: 0,
    },
    'in-view-options': { once: animation?.once, amount: '-50px' },
    viewport: {
      once: animation?.once ?? true,
      amount: '-50px',
    },
    transition: {
      duration: animation?.duration,
      ease: animation?.ease,
      delay: 0.04 + (animation?.delay || 0),
    },
  } as any;

  return {
    enabled: animation.enabled,
    details: animationDetails,
  };
}

export function debounce(fn: any, delay: number) {
  let timer: any;
  return function (...args: any[]) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

export function uid() {
  return Math.random().toString(36).slice(2, 7);
}

export function arrayToObjectById(arr: any[], key: string) {
  const obj = {} as any;
  arr.forEach((element) => {
    obj[element[key]] = element;
  });

  return obj;
}

export const getColorShadeVars = (
  baseColorCssVariable: string,
  key: string
) => {
  return {
    [`--color-${key}-50`]: `color-mix(in srgb, ${baseColorCssVariable} 5%, white)`,
    [`--color-${key}-100`]: `color-mix(in srgb, ${baseColorCssVariable} 10%, white)`,
    [`--color-${key}-200`]: `color-mix(in srgb, ${baseColorCssVariable} 30%, white)`,
    [`--color-${key}-300`]: `color-mix(in srgb, ${baseColorCssVariable} 50%, white)`,
    [`--color-${key}-400`]: `color-mix(in srgb, ${baseColorCssVariable} 70%, white)`,
    [`--color-${key}-500`]: `${baseColorCssVariable}`,
    [`--color-${key}-600`]: `color-mix(in srgb, ${baseColorCssVariable}, black 10%)`,
    [`--color-${key}-700`]: `color-mix(in srgb, ${baseColorCssVariable}, black 30%)`,
    [`--color-${key}-800`]: `color-mix(in srgb, ${baseColorCssVariable}, black 50%)`,
    [`--color-${key}-900`]: `color-mix(in srgb, ${baseColorCssVariable}, black 70%)`,
    [`--color-${key}-950`]: `color-mix(in srgb, ${baseColorCssVariable}, black 90%)`,
  };
};
