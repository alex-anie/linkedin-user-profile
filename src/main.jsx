import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';

import {createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,} from "react-router-dom";

import SideNav from './layouts/sideNav';
import DisplayContent from './layouts/DisplayContent';

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<SideNav />}>
        <Route path='DisplayContent' element={DisplayContent} />
      </Route>
    )
  )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
