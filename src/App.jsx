import "./App.css";
import SignIn from "./pages/SignIn";
import SignUpPage from "./pages/signUp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <div>Halaman Utama</div>,
    },
    {
      path: "/Login",
      element: <SignIn/>,
    },
    {
      path: "/Register",
      element: <SignUpPage/>,
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}


export default App;