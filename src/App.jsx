import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./ui/AppLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Resume from "./pages/Resume"
import Portfolio from "./pages/Portfolio"

function App() {

const router = createBrowserRouter([
  {
    element:<AppLayout />,
    children:[
      {index:true, element:<Home />},
      {path:'/about',element:<About />},
      {path:'/contact',element:<Contact />},
      {path:'/resume', element:<Resume />},
      {path:'/portfolio', element:<Portfolio />}
    ]

  }
])

  return <RouterProvider router={router}/>
}

export default App
