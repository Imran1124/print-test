import {Suspense, lazy} from 'react';
import Loader from '../components/Loader';

const Loadable = Component => props =>
  (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );

const WebViewComponents = Loadable(lazy(() => import('../screens/web-view')));

export const routes = [
  {
    id: 1,
    name: 'WebViewComponents',
    component: WebViewComponents,
    navigationType: 'stack',
  },
];
