import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';

import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from 'react-router-dom';

import Course from "./pages/Course/Course.jsx";
import Editor from "./pages/Editor/Editor.jsx";

const user = {
  id : 0,
  firstname : "",
  lastname : "",
  email : "",
  gender : "",
  birthdate : "",
}

const AppWrapper = (props) => {
  const location = useLocation();
  return <App user = {user} />;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppWrapper />,
    children: [
      {
        path: 'course',
        element: <Course />,
      },
      {
        path: 'editor',
        element: <Editor />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
