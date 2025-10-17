import type { JSX } from 'react';
import { createElement } from 'react';
import AboutPage from './pages/about.tsx';
import NotFoundPage from './pages/notfound.tsx';
import CollectionPage from './pages/collection.tsx';
import StartPage from './pages/start.tsx';

interface Route {
  element: JSX.Element;
  path: string;
  loader?: Function;
  menuLabel?: string;
  index?: number;
  parent?: string;
}

export default [
  AboutPage,
  NotFoundPage,
  CollectionPage,
  StartPage
]

  .map(x => (({ element: createElement(x), ...x.route }) as Route))
  .sort((a, b) => (a.index || 0) - (b.index || 0));