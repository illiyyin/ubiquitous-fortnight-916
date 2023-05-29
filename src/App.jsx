import { useState } from "react"

import "./App.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./component/Home"
import About from "./component/About"
import Dashboard from "./component/Dashboard"
import Banner from "./component/Banner"

import { Outlet } from 'react-router-dom'
import Profile from "./component/Profile"

const BannerLayout = () => {
  return (
    <div>
      <Banner />
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
	{
		path: "/",
		element: <BannerLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
			{
				path: "about",
				element: <About />,
			},
			{
				path: "dashboard",
				element: <Dashboard />,
      },
      {
        path: "profile/:profileName",
        element: <Profile />,
      },
		],
	},
])

function App() {
	const [count, setCount] = useState(0)

	return <RouterProvider router={router} />
}

export default App
