import {
  createBrowserRouter,
  RouterProvider,
  //redirect,
} from "react-router-dom";
import AuthContextProvider from "./Components/Context/auth";
import Homepage from "./Pages/Homepage";
import AboutPage from "./Pages/AboutPage";
import ContactUsPage from "./Pages/ContactUsPage";
import LoginPage from "./Pages/LoginPage";
import AdminPage from "./Pages/Dashboard";
import CreatePosts from "./Components/admin/Posts";
import SinglePost from "./Components/Posts/SinglePost";
import RegisterPage from "./Pages/RegisterPage";
import ManageVideos from "./Components/admin/Videos";
import ViewUsers from "./Components/admin/users";
import ErrorModal from "./Components/Error/errorModal";
import Profile from "./Pages/Profile";
import {
  storiesApiCalls,
  userApiCalls,
  loginUser,
  videosApiCalls,
  fetchVideos,
  fetchPostsAndVideos,
  fetchAdmins,
  sendComments,
} from "./Components/apiHandlers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    loader: fetchPostsAndVideos,
    errorElement: <ErrorModal />,
  },
  { path: "/aboutus", element: <AboutPage /> },
  { path: "/contactus", element: <ContactUsPage /> },
  { path: "/post/:id", element: <SinglePost />, action: sendComments },
  {
    path: "/home",
    element: <Homepage />,
    loader: fetchPostsAndVideos,
    errorElement: <ErrorModal />,
  },
  { path: "/login", element: <LoginPage />, action: loginUser },
  { path: "/profile", element: <Profile />, errorElement: <ErrorModal /> },
  {
    path: "/register",
    element: <RegisterPage />,
    action: userApiCalls,
  },
  {
    path: "/dashboard",
    element: <AdminPage />,
    children: [
      {
        path: "/dashboard",
        element: <CreatePosts />,
        action: storiesApiCalls,
      },
      {
        path: "videos",
        element: <ManageVideos />,
        action: videosApiCalls,
        loader: fetchVideos,
      },
      {
        path: "users",
        element: <ViewUsers />,
        action: userApiCalls,
        loader: fetchAdmins,
      },
    ],
    errorElement: <ErrorModal />,
  },
]);

function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}

export default App;
