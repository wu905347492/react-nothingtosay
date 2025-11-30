import { createBrowserRouter } from 'react-router';

import App from '../App.tsx';
import NoThingLayout from '../layout';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App, // 父路由
    children: [
      {
        index: true,
        path: '/',
        Component: NoThingLayout, // 子路由
      },
      // {
      //   path: 'about',
      //   Component: About, // 子路由
      // },
    ],
  },
]);

export default router;
