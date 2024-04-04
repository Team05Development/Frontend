import { createBrowserRouter } from 'react-router-dom';
import App from '../ui/App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: '',
    children: [
      {
        path: '/',
        element: '',
      },
    ],
  },
]);
