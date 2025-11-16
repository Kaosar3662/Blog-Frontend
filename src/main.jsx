
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import "./assets/css/var.css"
import App from './App.jsx'
import NotFound from './pages/404.jsx';
import Index from './pages/Index.jsx';
import Signup from './pages/signup.jsx';
import Login from './pages/log-in.jsx';
import Blog from './pages/Blog.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Blog /> },
      { path: '*', element: <NotFound /> },
      { path: '/signup', element: <Signup /> },
      { path: '/login', element: <Login /> },



    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
