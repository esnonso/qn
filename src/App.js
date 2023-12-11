import {
  createBrowserRouter,
  RouterProvider,
  //redirect,
} from "react-router-dom";
import Homepage from "./Pages/Homepage";
import AboutPage from "./Pages/AboutPage";
import LoginPage from "./Pages/LoginPage";
import AdminPage from "./Pages/Dashboard";
import CreatePosts from "./Components/admin/Posts";
import SinglePost from "./Pages/SinglePost";
import ManageVideos from "./Components/admin/Videos";
import ViewUsers from "./Components/admin/users";
import ErrorHandler from "./Components/Error";
import {
  storiesApiCalls,
  userApiCalls,
  loginUser,
  fetchPosts,
  videosApiCalls,
  fetchVideos,
  fetchPostsAndVideos,
} from "./Components/apiHandlers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    loader: fetchPostsAndVideos,
    errorElement: <ErrorHandler />,
  },
  { path: "/aboutus", element: <AboutPage /> },
  { path: "/singlepost", element: <SinglePost /> },
  {
    path: "/home",
    element: <Homepage />,
    loader: fetchPostsAndVideos,
    errorElement: <ErrorHandler />,
  },
  { path: "/login", element: <LoginPage />, action: loginUser },
  {
    path: "/dashboard",
    element: <AdminPage />,
    children: [
      {
        path: "/dashboard",
        element: <CreatePosts />,
        action: storiesApiCalls,
        loader: fetchPosts,
      },
      {
        path: "videos",
        element: <ManageVideos />,
        action: videosApiCalls,
        loader: fetchVideos,
      },
      { path: "users", element: <ViewUsers />, action: userApiCalls },
    ],
    errorElement: <ErrorHandler />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
