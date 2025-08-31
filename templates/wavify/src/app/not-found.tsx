import Container from './not-found-container';
import { getPage } from '@/utils';
import { Page } from '@/types';
import type { FC } from 'react';
import type { Metadata } from 'next';

const pageId = 'not-found';
// Replace with an API request if needed
const page = getPage(pageId) as unknown as Page;

export const metadata: Metadata = page.seo || { title: 'Next App' };

const NotFoundPage: FC = () => {
  return <Container page={page} />;
};

export default NotFoundPage;
