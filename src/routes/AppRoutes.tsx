import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import MainLayout from '@/components/layout/MainLayout'
import Home from '@/pages/Home'
import ProductDetails from '@/pages/ProductDetails'
import Cart from '@/pages/Cart'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        element: <MainLayout />,
        children: [
          { index: true, element: <Home /> },
          { path: 'product/:id', element: <ProductDetails /> },
          { path: 'cart', element: <Cart /> },
        ],
      },
    ],
  },
])

export default router
