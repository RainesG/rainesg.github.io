import { Gallery, ErrorPage, Home, PageTest } from '@/pages';
import PageBlog from '@/pages/PageBlog';
import PageTwo from '@/pages/PageTwo';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/gallery',
    element: <Gallery />,
  },
  {
    path: '/blog',
    element: <PageBlog />,
  },
  {
    path: '/pageTest',
    element: <PageTest />,
  },
  {
    path: '/proForm',
    element: <PageTwo />,
  },
]);
