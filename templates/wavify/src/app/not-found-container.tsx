'use client';
import RenderBackgrounds from '@/components/common/RenderBackgrounds';
import { cn } from '@/utils';
import type { FC } from 'react';
import { ContainerProps } from '@/types';
import Wavify404 from '@/components/sections/Wavify404';

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
      <Wavify404 section={page.sections['Wavify404']} />
    </main>
  );
};

export default Container;
