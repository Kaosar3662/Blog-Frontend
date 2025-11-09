
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import './assets/var.css'
import App from './App.jsx'
import NotFound from './pages/404.jsx';
import Index from './pages/Index.jsx';
import Signup from './pages/signup.jsx';
import Login from './pages/log-in.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Index /> },
      { path: '*', element: <NotFound /> },
      { path: '/signup', element: <Signup /> },
      { path: '/login', element: <Login /> },

    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
