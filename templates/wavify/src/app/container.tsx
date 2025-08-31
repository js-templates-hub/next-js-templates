'use client';
import RenderBackgrounds from '@/components/common/RenderBackgrounds';
import { cn } from '@/utils';
import type { FC } from 'react';
import { ContainerProps } from '@/types';
import WavifyNavbar from '@/components/sections/WavifyNavbar';
import WavifyHero from '@/components/sections/WavifyHero';
import WavifyLogos from '@/components/sections/WavifyLogos';
import WavifyFeature from '@/components/sections/WavifyFeature';
import WavifyContent from '@/components/sections/WavifyContent';
import WavifyStats from '@/components/sections/WavifyStats';
import WavifyTestimonial from '@/components/sections/WavifyTestimonial';
import WavifyAccordion from '@/components/sections/WavifyAccordion';
import WavifyCTA from '@/components/sections/WavifyCTA';
import WavifyFooter from '@/components/sections/WavifyFooter';

const Container: FC<ContainerProps> = ({ page }) => {
  return (
    <main
      className={cn(
        'relative min-h-screen min-w-min overflow-clip',
        page.containerClasses
      )}
    >
      <RenderBackgrounds backgrounds={page.backgrounds || []} />

      {/* Page Sections */}
      <WavifyNavbar section={page.sections['WavifyNavbar']} />
      <WavifyHero section={page.sections['WavifyHero']} />
      <WavifyLogos section={page.sections['WavifyLogos']} />
      <WavifyFeature section={page.sections['WavifyFeature']} />
      <WavifyContent section={page.sections['WavifyContent']} />
      <WavifyStats section={page.sections['WavifyStats']} />
      <WavifyTestimonial section={page.sections['WavifyTestimonial']} />
      <WavifyAccordion section={page.sections['WavifyAccordion']} />
      <WavifyCTA section={page.sections['WavifyCTA']} />
      <WavifyFooter section={page.sections['WavifyFooter']} />
    </main>
  );
};

export default Container;
