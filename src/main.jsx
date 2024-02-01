import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createHashRouter } from 'react-router-dom'

//pages
import ErrorPage from './errorPage.jsx'
import Home from './Routes/home.jsx'
import Lojas from './Routes/lojas.jsx'
import Novidades from './Routes/novidades.jsx'
import Promos from './Routes/promos.jsx'
import Items from './Routes/items.jsx'

const router = createHashRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<ErrorPage/>,
    children:[{
        path:'/',
        element:<Home/>

      },
      {
        id:'home',
        path:'/home',
        element:<Home/>
      },
      {
        id:'lojas',
        path:'/lojas',
        element:<Lojas/>,

      },
      {
        id:'novidades',
        path:'/novidades',
        element:<Novidades/>,

      },{
        id:'promos',
        path:'/Promos',
        element:<Promos/>,

      },{
        id:'Promos',
        path:'/products/:item',
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
