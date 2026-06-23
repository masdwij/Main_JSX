import "./App.css";
import SignIn from "./pages/SignIn";
import SignUpPage from "./pages/signUp";
import Error from "./pages/Error";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: 	<div className="flex justify-center items-center min-h-screen">
          <Link to="/login" className="p-2 m-5 bg-primary text-white">
            Login
          </Link>
          |
          <Link to="/register" className="p-2 m-5 bg-primary text-white">
            Register
          </Link>
        </div>,
      errorElement: <Error />
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