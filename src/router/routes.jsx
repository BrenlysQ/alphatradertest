// router
import { createBrowserRouter } from 'react-router-dom';
//layouts
import AppLayout from '../layouts/App.layout'
//components
import Home from '../pages/home'

export const routes = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        
        {
          path: '/',
          element: <Home />,
        },
      ],
    },
  ]);
  