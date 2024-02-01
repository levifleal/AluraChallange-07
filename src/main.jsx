import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

//pages
import ErrorPage from './errorPage.jsx'
import Home from './Routes/home.jsx'
import Lojas from './Routes/lojas.jsx'
import Novidades from './Routes/novidades.jsx'
import Promos from './Routes/promos.jsx'
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

        path:'home',
        element:<Home/>
      },
      {

        path:'lojas',
        element:<Lojas/>,

      },
      {

        path:'novidades',
        element:<Novidades/>,

      },{

        path:'Promos',
        element:<Promos/>,

      },{
        path:'products/:item',
        element:<Items/>,

      }
    ]
  }
]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
