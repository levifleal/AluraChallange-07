import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

//pages
import ErrorPage from './errorPage.jsx'
import Home from './Routes/home.jsx'
import Lojas from './Routes/lojas.jsx'
import Novidades from './Routes/novidades.jsx'
import Promos from './Routes/promos.jsx'
import Items from './Routes/items.jsx'

// const router = createHashRouter([
//   {
//     path:'/',
//     element:<App/>,
//     errorElement:<ErrorPage/>,
//     children:[{
//         path:'AluraChallange-07/',
//         element:<Home/>

//       },
//       {
//         id:'home',
//         path:'AluraChallange-07/home',
//         element:<Home/>
//       },
//       {
//         id:'lojas',
//         path:'AluraChallange-07/lojas',
//         element:<Lojas/>,

//       },
//       {
//         id:'novidades',
//         path:'AluraChallange-07/novidades',
//         element:<Novidades/>,

//       },{
//         id:'promos',
//         path:'AluraChallange-07/Promos',
//         element:<Promos/>,

//       },{
//         id:'Promos',
//         path:'AluraChallange-07/products/:item',
//         element:<Items/>,

//       }
//     ]
//   }
// ]
// )

const routes = createRoutesFromElements(
  <Route>
    <Route index element={<Home/>} />
    <Route path='/loja' element={<Lojas/>}/>
  </Route>
)
const router =  createHashRouter(routes)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
