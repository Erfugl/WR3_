import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import type { RouteObject } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './css/index.css';
import routes from './routes';
import App from './App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routes as RouteObject[]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
