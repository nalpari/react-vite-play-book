import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import User from '../pages/User'
import Test from '../pages/Test'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <User />,
      },
      {
        path: '/test',
        element: <Test />,
      },
    ],
  },
])

export default router
