import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Contact from './Pages/Contact'
import About from './Pages/About'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>
  },
  {
    path: '/contact',
    element: <Contact/>
  },
  {
    path: '/about',
    element: <About/>
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App