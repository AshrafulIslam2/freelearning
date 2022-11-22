import Login from "../components/Login/Login";
import PrivetRoute from "../components/PrivetRoute/PrivetRoute";
import Registration from "../components/Registration/Registration";
import Profile from "../profile/Profile";

const { createBrowserRouter } = require("react-router-dom");
const { default: Blog } = require("../components/Blogs/Blog");
const { default: Cheackout } = require("../components/CheackOutPage/Cheackout");
const {
  default: CourseDetail,
} = require("../components/CoursDetails/CourseDetail");
const { default: Courses } = require("../components/Courses/Courses");
const { default: Home } = require("../components/Home/Home");
const { default: Mains } = require("../layouts/Mains");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mains></Mains>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () => fetch("https://freelearning.vercel.app/courses"),
      },
      {
        path: "/courses/:id",
        element: (
          <PrivetRoute>
            <CourseDetail></CourseDetail>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://freelearning.vercel.app/courses/${params.id}`),
      },
      {
        path: "/blogs",
        element: <Blog></Blog>,
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivetRoute>
            <Cheackout></Cheackout>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://freelearning.vercel.app/courses/${params.id}`),
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/profile",
        element: (
          <PrivetRoute>
            <Profile></Profile>
          </PrivetRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <div>Erorr 404</div>,
  },
]);
