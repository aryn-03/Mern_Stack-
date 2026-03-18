import { createBrowserRouter, RouterProvider } from "react-router"
import RootLayout from "./components/RootLayout"
import AddUser from "./components/AddUser"
import Home from "./components/Home"
import User from "./components/User"
import UsersList from "./components/UsersList"

function App() {

  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "adduser", element: <AddUser /> },
        { path: "users", element: <UsersList /> },
        { path: "users/:id", element: <User /> }   // dynamic route
      ]
    }
  ])

  return <RouterProvider router={routerObj} />
}

export default App