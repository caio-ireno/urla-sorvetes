import { RouteObject } from 'react-router-dom';
import ResponsiveMenu from '../components/ResponsiveMenu/Index';
import Index from '../pages/index';

export default [
  {
    path: '/',
    element: <ResponsiveMenu />,
    children: [
      {
        index: true,
        element: <Index />,
      },
    ],
  },
] as Array<RouteObject>;
