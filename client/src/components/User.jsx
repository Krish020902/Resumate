import { createBrowserRouter } from "react-router-dom";
import SignIn from "./SignIn";
import LogIn from "./LogIn";
import Form from "./Form";
import Dashboard from "./Dashboard";
import ChatGPT from "./ChatGPT";
import TotalResume from "./TotalResume";
const User = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/Signin",
    element: <SignIn />,
  },
  {
    path: "/Login",
    element: <LogIn />,
  },
  {
    path: "/Form",
    element: <Form />,
  },
  {
    path: "/ChatGPT",
    element: <ChatGPT />,
  },
  {
    path: "/TotalResume",
    element: <TotalResume />,
  },
]);

export default User;
