import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

//pages
import ErrorPage from './errorPage.jsx'
import Home from './Routes/home.jsx'
import Lojas from './Routes/Lojas.jsx'
import Novidades from './Routes/novidades.jsx'
import Promos from './Routes/Promos.jsx'
import Items from './Routes/items.jsx'

const router = createBrowserRouter([
  {
  path:'/',
  element:<App/>,
  errorElement:<ErrorPage/>,
  children:[{
    path:'/',
    element:<Home/>

  },
  {
    path:'/lojas',
    element:<Lojas/>,
    errorElement:<ErrorPage/>
  },
  {
    path:'/novidades',
    element:<Novidades/>,
    errorElement:<ErrorPage/>
  },{
    path:'/Promos',
    element:<Promos/>,
    errorElement:<ErrorPage/>
  },{
    path:'/products/:item',
    element:<Items/>,
    errorElement:<ErrorPage/>
  }
  ]
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
