import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layouts/Main';
import NotFoundPage from './Pages/404/NotFoundPage';
import Blog from './Pages/Blog/Blog';
import Course from './Pages/Course/Course';
import Courses from './Pages/Courses/Courses';
import EnrollNow from './Pages/EnrollNow/EnrollNow';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import PrivetRoute from './Pages/PrivetRoute/PrivetRoute';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://cicada-courses-server-rimon005.vercel.app/courses'),
          element: <Home></Home>
        },
        {
          path: '/courses',
          element: <Courses></Courses>,
          loader: () => fetch('https://cicada-courses-server-rimon005.vercel.app/courses'),
        },
        {
          path: '/category/:id',
          loader: ({ params }) => fetch(`https://cicada-courses-server-rimon005.vercel.app/category/${params.id}`),
          element: <Courses></Courses>
        },
        {
          path: '/courses/:id',
          loader: ({ params }) => fetch(`https://cicada-courses-server-rimon005.vercel.app/courses/${params.id}`),
          element: <Course></Course>
        },
        {
          path: '/enroll/:id',
          loader: ({ params }) => fetch(`https://cicada-courses-server-rimon005.vercel.app/enroll/${params.id}`),
          element:<PrivetRoute><EnrollNow></EnrollNow></PrivetRoute>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '*',
          element: <NotFoundPage></NotFoundPage>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
