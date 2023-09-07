import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import AboutPage from "./Pages/AboutPage";

const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/home", element: <Homepage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

export const DEFAULT = [
  {
    id: 0,
    title: "Data Protection Awareness",
    imgUrl:
      "https://lastfm.freetls.fastly.net/i/u/ar0/c10215d84b4f281e6060c704d0894f42.jpg",
    author: "Queen Nwosu",
    date: "05/11/2023",
    desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
  },
  {
    id: 1,
    title: "Rick Sanchez ruins America",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-QoIeSRyyQ67JMeC_4MyzFZLmXrlKcjgwEg&usqp=CAU",
    date: "18/08/1918",
    author: "Bam bike",
    desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
  },
  {
    id: 2,
    title: "Cafu set to return to Brazil",
    imgUrl:
      "https://i.guim.co.uk/img/static/sys-images/Football/Pix/pictures/2008/12/18/1229601609089/Cafu-001.jpg?width=465&dpr=1&s=none",
    author: "Chinemezue",
    date: "12/08/1954",
    desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
  },
  {
    id: 3,
    title: "World President Joe Biden is sick",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKKCYIuuYlcVlLnOtv91zzXi0Qrad_lcn179R7uuZ_&s",
    author: "Queen Nwosu",
    date: "20/12/1934",
    desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
  },
  {
    id: 4,
    title: "Nigerians reject President Tinubu",
    imgUrl: "https://dailypost.ng/wp-content/uploads/2022/11/tinubu.jpg",
    author: "John Doe",
    date: "1/01/2000",
    desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
  },
  {
    id: 5,
    title: "Trump indicted a second time says rick",
    imgUrl:
      "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcS94AtyyrG54NyedtSjNWWJ_GH7l13BF13eEZevLc5zcfFbDvsPVKgq0HTSG-Cy2SyXrzJ5AcrSMxDYJEgEAPLQG_8eABqh632a0p63QYE",
    author: "Mike Borg",
    date: "22/02/1204",
    desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
  },
];
