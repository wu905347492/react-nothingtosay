import { Routes, Route } from 'react-router';

import App from '../App.tsx';
import { Dashboard } from '../pages/dashboard';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
};
export { Routers };
