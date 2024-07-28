import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './css/style.css';
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from 'react-router-dom';

// Import your page components
import Dashboard from './pages/Dashboard.jsx';
import Courses from './pages/Courses.jsx';
import Groups from './pages/Groups.jsx';
import Students from './pages/Students.jsx';
import Assets from './pages/Assets.jsx';
import Profile from './pages/Profile.jsx';
import Settings from './pages/Settings.jsx';
import SignUp from './pages/SignUp.jsx';
import SignIn from './pages/SignIn.jsx';

const AppWrapper = (props) => {
  const location = useLocation();
  return <App currentLink={location.pathname} {...props} />;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppWrapper />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'courses',
        element: <Courses />,
      },
      {
        path: 'groups',
        element: <Groups />,
      },
      {
        path: 'students',
        element: <Students />,
      },
      {
        path: 'assets',
        element: <Assets />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
      {
        path: 'sign-up',
        element: <SignUp />,
      },
      {
        path: 'sign-in',
        element: <SignIn />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
